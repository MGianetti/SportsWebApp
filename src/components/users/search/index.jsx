import React, { Component } from 'react';
import Fetch from '../../../api/index'
import DataTable from '../../common/table';
import { Grid, Typography, TextField } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider';
import SearchInputField from './searchInputField.jsx';

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
            columns: ['Username', 'Name', 'E-mail', 'City', 'Ride in Group', 'Day of the week', 'Posts', 'Albuns', 'Photos'],
            searchField: ''
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
                postsCounter[post.userId] = 1;
            }else{
                postsCounter[post.userId] += 1;
            }
        })
       
        let usersRideOption = {};
        rideInGroup.map( rideOption => {
            usersRideOption[rideOption.userId] = rideOption.rideInGroup
        })

        let usersDaysOfTheWeek = {};
        daysOfTheWeek.map( daysOption => {
            usersDaysOfTheWeek[daysOption.userId] = daysOption.daysOfTheWeek
        })

        let usersAlbuns = {};
        albuns.map( album => {
            if(!( album.userId in usersAlbuns)){
                usersAlbuns[album.userId] = 1;
            }else{
                usersAlbuns[album.userId] += 1;
            }
        })

        let usersPhotos = {}
        albuns.map( album => {
            if(!( album.userId in usersPhotos)){
                usersPhotos[album.userId] = album.photos.length;
            }else{
                usersPhotos[album.userId] += album.photos.length;
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
                usersPhotos[user.id]
            ])            
        })
        this.setState({users: formatedUsers})
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