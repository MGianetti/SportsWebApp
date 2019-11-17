/** @format */

import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {Avatar, Grid, Typography} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Fetch from '../../api/index'

const styles = theme => ({
    avatar: {
        marginRight: 25,
    },
    name: {
        marginRight: 25,
    },
    chevron: {
        marginRight: 90,
    },
})

class DropDownMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: {
                name: '',
                initials: '',
            },
        }
    }
    componentDidMount = () => {
        Fetch.login().then(result => {
            this.setState({userName: result})
        })
    }
    render() {
        const {classes} = this.props
        const {userName} = this.state

        let initials = userName.name.split(' ')
        if (initials.length >= 2) {
            initials = initials[0][0] + initials[1][0]
        } else {
            initials = initials[0][0] + initials[0][1]
        }
        return (
            <Grid container alignItems="center" direction="row">
                <Grid item className={classes.avatar}>
                    <Avatar>{initials}</Avatar>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" direction="row">
                        <Grid item className={classes.name}>
                            <Typography>{userName.name}</Typography>
                        </Grid>
                        <Grid item className={classes.chevron}>
                            <FontAwesomeIcon size="2x" color="#808080" icon={faChevronDown} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

DropDownMenu.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DropDownMenu)
