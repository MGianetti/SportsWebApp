/** @format */
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'
import {faMapSigns} from '@fortawesome/free-solid-svg-icons'

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

const HelperUsers = () => {
    const classes = useStyles()
    return (
        <Grid container direction="row" spacing={8}>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faPuzzlePiece} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    Sport type
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    Cycling
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faTrophy} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    Mode
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    Advanced
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center" spacing={4}>
                    <Grid item>
                        <FontAwesomeIcon size="5x" color="#3ac5a9" icon={faMapSigns} />
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography variant="subtitle1" className={classes.primaryText}>
                                    Route
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.secondaryText}>
                                    30 miles
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HelperUsers
