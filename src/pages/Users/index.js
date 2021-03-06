/** @format */

import React, {Component} from 'react'
import Fetch from '../../api/index'
import DataTable from '../../components/common/Table'
import {Grid, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import SearchInputField from '../Users/components/SearchInputField'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import ModalElement from '../Users/components/Modal'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
    externalContainer: {
        maxWidth: '80%',
    },
    searchBar: {
        height: 200,
    },
    divider: {
        width: '50%',
        paddingLeft: 60,
        paddingRight: 60,
    },
    searchInput: {
        width: '20%',
    },
})

class UserSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            columns: [
                'Username',
                'Name',
                'E-mail',
                'City',
                'Ride in Group',
                'Day of the week',
                'Posts',
                'Albuns',
                'Photos',
                '',
            ],
            searchField: '',
            modal: {
                open: false,
                name: '',
            },
        }
    }

    componentDidMount() {
        const promiseUsers = Fetch.users()

        const promisePosts = Fetch.posts()

        const promiseAlbuns = Fetch.albuns()

        const promisePhotos = Fetch.photos()

        const promiseDaysOfTheWeek = Fetch.dayOfTheWeek()

        const promiseRideInGroup = Fetch.rideInGroup()

        Promise.all([
            promiseUsers,
            promisePosts,
            promiseAlbuns,
            promisePhotos,
            promiseDaysOfTheWeek,
            promiseRideInGroup,
        ]).then(results => {
            const users = results[0].data
            const posts = results[1].data
            const albuns = results[2]
            const photos = results[3].data
            const daysOfTheWeek = results[4]
            const rideInGroup = results[5]
            this.formatDataForTable(users, posts, albuns, photos, daysOfTheWeek, rideInGroup)
        })
    }

    formatDataForTable = (users, posts, albuns, photos, daysOfTheWeek, rideInGroup) => {
        let postsCounter = {}
        posts.map(post => {
            if (!(post.userId in postsCounter)) {
                return (postsCounter[post.userId] = 1)
            } else {
                return (postsCounter[post.userId] += 1)
            }
        })

        let usersRideOption = {}
        rideInGroup.map(rideOption => {
            return (usersRideOption[rideOption.userId] = rideOption.rideInGroup)
        })

        let usersDaysOfTheWeek = {}
        daysOfTheWeek.map(daysOption => {
            return (usersDaysOfTheWeek[daysOption.userId] = daysOption.daysOfTheWeek)
        })

        let usersAlbuns = {}
        albuns.map(album => {
            if (!(album.userId in usersAlbuns)) {
                return (usersAlbuns[album.userId] = 1)
            } else {
                return (usersAlbuns[album.userId] += 1)
            }
        })

        let usersPhotos = {}
        albuns.map(album => {
            if (!(album.userId in usersPhotos)) {
                return (usersPhotos[album.userId] = album.photos.length)
            } else {
                return (usersPhotos[album.userId] += album.photos.length)
            }
        })

        let formatedUsers = []
        users.map(user => {
            return formatedUsers.push([
                user.username,
                user.name,
                user.email,
                user.address.city,
                usersRideOption[user.id],
                usersDaysOfTheWeek[user.id],
                postsCounter[user.id],
                usersAlbuns[user.id],
                usersPhotos[user.id],
                <IconButton onClick={() => this.handleTrashClick(user.username)}>
                    <FontAwesomeIcon icon={faTrash} key={`${user.id}-trash`} color="white" />
                </IconButton>,
            ])
        })

        //Local Storage
        let keys = Object.keys(localStorage)

        keys.map(key => {
            let user = localStorage.getItem(key)
            user = user.split(',')
            return formatedUsers.push([
                user[0],
                user[1],
                user[2],
                user[3],
                user[4] === 'true' ? 'Always' : user[5] === 'true' ? 'Sometimes' : user[6] === 'true' ? 'Never' : '',
                (user[7] === 'true' ? 'Mon ' : '') +
                    (user[8] === 'true' ? 'Tue ' : '') +
                    (user[9] === 'true' ? 'Wed ' : '') +
                    (user[10] === 'true' ? 'Thu ' : '') +
                    (user[11] === 'true' ? 'Fri ' : '') +
                    (user[12] === 'true' ? 'Sat ' : '') +
                    (user[13] === 'true' ? 'Sun ' : ''),
                0,
                0,
                0,
                <IconButton onClick={() => this.handleTrashClick(user[0])}>
                    <FontAwesomeIcon icon={faTrash} key={`${user[0]}-trash`} color="white" />
                </IconButton>,
            ])
        })

        this.setState({users: formatedUsers, usersFiltered: formatedUsers})
    }

    handleTrashClick = userName => {
        this.setState({modal: {open: true, name: userName}})
    }

    handleModalConfirmClick = () => {
        let {users, modal} = this.state
        let newUsers = users.filter(user => {
            if (user[0] !== modal.name) return user
        })
        modal = {
            open: false,
            name: '',
        }
        this.setState({users: newUsers, modal})
    }

    handleModalCancelClick = () => {
        const modal = {
            open: false,
            name: '',
        }
        this.setState({modal})
    }

    handleSearchFieldChange = event => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {columns, searchField} = this.state
        const {classes} = this.props
        return (
            <Grid container className={classes.externalContainer} direction="column">
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        className={classes.searchBar}
                        alignContent="center"
                        alignItems="center">
                        <Grid item>
                            <Typography variant="h3">Users</Typography>
                        </Grid>
                        <Grid item className={classes.divider}>
                            <Divider />
                        </Grid>
                        <Grid item className={classes.searchInput}>
                            <SearchInputField
                                onSearchFieldChange={this.handleSearchFieldChange}
                                searchField={searchField}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ModalElement
                        openState={this.state.modal.open}
                        onConfirm={this.handleModalConfirmClick}
                        onCancel={this.handleModalCancelClick}
                    />
                    <DataTable tableData={this.state.users} filterData={searchField} tableHeader={columns} />
                </Grid>
            </Grid>
        )
    }
}

UserSearch.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserSearch)
