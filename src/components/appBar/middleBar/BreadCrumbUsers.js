/** @format */
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Link from 'react-router-dom/Link'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    externalContainer: {
        height: 60,
        backgroundColor: '#f9f9f9',
    },
    breadCrumbStart: {
        marginLeft: 60,
    },
    breadCrumbItems: {
        marginLeft: 10,
    },
}))

const BreadCrumbUsers = () => {
    const classes = useStyles()
    return (
        <Grid container direction="row" alignItems="center" className={classes.externalContainer}>
            <Grid item className={classes.breadCrumbStart}>
                <FontAwesomeIcon color="#3ac5a9" icon={faHome} />
            </Grid>
            <Grid item className={classes.breadCrumbItems}>
                <FontAwesomeIcon color="#a0a0a0" icon={faChevronRight} />
            </Grid>
            <Grid item className={classes.breadCrumbItems}>
                <Typography variant="h5">Users</Typography>
            </Grid>
        </Grid>
    )
}

export default BreadCrumbUsers
