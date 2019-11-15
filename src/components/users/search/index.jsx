import React, { Component } from 'react';
import Fetch from '../../../api/index'
import DataTable from '../../common/table';

class UserSearch extends Component {
    state = { 
        users: [],
        columns: ['Username', 'Name', 'E-mail', 'City', 'Ride in Group', 'Day of the week', 'Posts', 'Albuns', 'Photos'],
    }

    async componentDidMount(){
        let users = await Fetch.users();
        this.setState({users});
    }

    render() { 
        return( 
            <DataTable />
        );
    }
}

export default UserSearch;