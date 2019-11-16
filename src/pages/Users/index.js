import React, { Component } from 'react'
import Fetch from '../../api/index'
import DataTable from '../../components/common/Table'
import { Grid, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import SearchInputField from '../Users/components/SearchInputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ModalElement from '../Users/components/Modal'
import IconButton from '@material-ui/core/IconButton'


const styles = theme => ({
    externalContainer: {
        maxWidth: '80%', 
    },
    searchBar:{
        height: 200
    },
    divider:{
        width: '50%',
        paddingLeft:60,
        paddingRight:60
    },
    searchInput:{
        width:'20%'
    }
 })

class UserSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            columns: ['Username', 'Name', 'E-mail', 'City', 'Ride in Group', 'Day of the week', 'Posts', 'Albuns', 'Photos', ''],
            searchField: '',
            modal:{
                open: false,
                userId: ''
            }
        }
    }

    componentDidMount(){
    
        const promiseUsers = Fetch.users()

        const promisePosts = Fetch.posts()

        const promiseAlbuns = Fetch.albuns()            

        const promisePhotos = Fetch.photos()

        const promiseDaysOfTheWeek = Fetch.dayOfTheWeek()

        const promiseRideInGroup = Fetch.rideInGroup()

        Promise.all([promiseUsers, promisePosts, promiseAlbuns, promisePhotos, promiseDaysOfTheWeek, promiseRideInGroup])
            .then( results => {
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
        
        let postsCounter = {};
        posts.map( post => {
            if(!( post.userId in postsCounter)){
                return postsCounter[post.userId] = 1;
            }else{
                return postsCounter[post.userId] += 1;
            }
        })
       
        let usersRideOption = {};
        rideInGroup.map( rideOption => {
            return usersRideOption[rideOption.userId] = rideOption.rideInGroup
        })

        let usersDaysOfTheWeek = {};
        daysOfTheWeek.map( daysOption => {
            return usersDaysOfTheWeek[daysOption.userId] = daysOption.daysOfTheWeek
        })

        let usersAlbuns = {};
        albuns.map( album => {
            if(!( album.userId in usersAlbuns)){
                return usersAlbuns[album.userId] = 1;
            }else{
                return usersAlbuns[album.userId] += 1;
            }
        })

        let usersPhotos = {}
        albuns.map( album => {
            if(!( album.userId in usersPhotos)){
                return usersPhotos[album.userId] = album.photos.length;
            }else{
                return usersPhotos[album.userId] += album.photos.length;
            }
        })
        
        let formatedUsers = []
        users.map( user => {
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
                <IconButton onClick={() => this.handleTrashClick(user.name)}>
                    <FontAwesomeIcon icon={faTrash} key={`${user.id}-trash`} color='white'/>
                </IconButton>
            ])            
        })
        this.setState({users: formatedUsers})
    }

    handleTrashClick = (userName) => {
        this.setState({modal: {open: true, userId: userName}})              
    }

    handleModalConfirmClick = () => {
        let { users, modal } = this.state;
        const newUsers = users.filter(user => {
                            if(user[1] !== modal.userId) return user
                        })
        modal = {
            open: false,
            userId: ''
        }
        this.setState({users: newUsers, modal})
    }
    
    handleModalCancelClick = () => {
        const modal = {
            open: false,
            userId: ''
        }
        this.setState({ modal })

    }

    render() { 
        const { users, columns } = this.state;
        const {classes} = this.props
        return( 
            <Grid container className={classes.externalContainer} direction='column'>
                <Grid item >
                    <Grid container direction='row' className={classes.searchBar} alignContent='center' alignItems='center'>
                        <Grid item>
                            <Typography variant='h3'>Users</Typography>
                        </Grid>
                        <Grid item className={classes.divider}>
                            <Divider/>
                        </Grid>
                        <Grid item className={classes.searchInput}>
                            <SearchInputField />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ModalElement openState={this.state.modal.open} onConfirm={this.handleModalConfirmClick} onCancel={this.handleModalCancelClick}/>
                    <DataTable tableData={users} tableHeader={columns}/>
                </Grid>
            </Grid>
        );
    }
}

UserSearch.propTypes = {
    classes: PropTypes.object.isRequired,
 }
 
export default withStyles(styles)(UserSearch)