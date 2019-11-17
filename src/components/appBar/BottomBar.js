/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Switch, Route} from 'react-router-dom'
import helperRegistration from './bottomBar/HelperRegistration'
import helperUsers from './bottomBar/HelperUsers'

const styles = makeStyles(theme => ({}))

const BottomBar = () => {
    const classes = styles()
    return (
        <Switch>
            <Route path="/users/new" component={helperRegistration} />
            <Route path="/users" component={helperUsers} />
        </Switch>
    )
}

export default BottomBar
