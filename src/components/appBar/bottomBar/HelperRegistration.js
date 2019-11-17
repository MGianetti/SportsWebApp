/** @format */
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {faWallet} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
    secondaryText: {
        fontWeight: 'bold',
        color: '#3c3c3c',
    },
    primaryText: {
        fontWeight: 600,
        color: 'gray',
    },
}))

const HelperRegistration = () => {
    const classes = useStyles()
    return (
        <Grid container direction="row" spacing={8}>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faUserFriends} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    Be part of the
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    Team
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faUserPlus} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    Join us
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    Today!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faWallet} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    It'll be forever
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    FREE!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HelperRegistration
