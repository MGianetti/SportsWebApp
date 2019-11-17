/** @format */

import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {Avatar, Grid, Typography} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Fetch from '../../api/index'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const styles = theme => ({
    avatar: {
        marginRight: 25,
        cursor: 'pointer',
    },
    name: {
        marginRight: 25,
        cursor: 'pointer',
    },
    chevron: {
        marginRight: 90,
        cursor: 'pointer',
    },
    dropDownPosition: {
        transformOrigin: 'center bottom',
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
            anchorEl: null,
        }
    }
    componentDidMount = () => {
        Fetch.login().then(result => {
            this.setState({userName: result})
        })
    }
    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    }
    render() {
        const {classes} = this.props
        const {userName, anchorEl} = this.state
        const open = Boolean(anchorEl)

        let initials = userName.name.split(' ')
        if (initials.length >= 2) {
            initials = initials[0][0] + initials[1][0]
        } else {
            initials = initials[0][0] + initials[0][1]
        }
        return (
            <Grid container alignItems="center" direction="row">
                <Grid item className={classes.avatar} onClick={this.handleMenu}>
                    <Avatar>{initials}</Avatar>
                </Grid>
                <Grid item>
                    <Grid container alignItems="center" direction="row">
                        <Grid item className={classes.name} onClick={this.handleMenu}>
                            <Typography>{userName.name}</Typography>
                        </Grid>
                        <Grid item className={classes.chevron} onClick={this.handleMenu}>
                            <FontAwesomeIcon size="2x" color="#808080" icon={faChevronDown} />
                        </Grid>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            style={{transformOrigin: 'center bottom'}}
                            open={open}
                            onClose={this.handleClose}>
                            <MenuItem onClick={this.handleClose}>Friends List</MenuItem>
                            <MenuItem onClick={this.handleClose}>Saved Items</MenuItem>
                            <MenuItem onClick={this.handleClose}>Notifications</MenuItem>
                            <MenuItem onClick={this.handleClose}>User Preferences</MenuItem>
                            <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                        </Menu>
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
