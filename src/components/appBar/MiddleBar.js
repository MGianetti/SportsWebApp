/** @format */

import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom'
import breadCrumbRegistration from '../appBar/middleBar/BreadCrumbRegistration'
import breadCrumbUsers from '../appBar/middleBar/BreadCrumbUsers'

const styles = theme => ({})

class MiddleBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const {classes} = this.props
        return (
            <Switch>
                <Route path="/users/new" component={breadCrumbRegistration} />
                <Route path="/users" component={breadCrumbUsers} />
            </Switch>
        )
    }
}

MiddleBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MiddleBar)
