import React, { Component } from 'react'
import { Grid, Typography, Checkbox} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    externalContainer: {
        maxWidth: '80%', 
    },
    searchBar:{
        height: 200
    },
    divider:{
        width: '60%',
        paddingLeft:60,
        paddingRight:60
    },
    registrationContainer:{
        paddingTop:10,
        height:500
    },
    registrationItem:{
    },
    textField:{
        marginBottom: 30,
        width:'25vw'
    },
    radioGroup:{
        //marginBottom: 30,
        width:'25vw',
        height: 86
    }
 })

class UserRegistration extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() { 
        const {classes} = this.props
        return (
            <Grid container className={classes.externalContainer} direction='column'>
                <Grid item >
                    <Grid container direction='row' className={classes.searchBar} alignContent='center' alignItems='center'>
                        <Grid item>
                            <Typography variant='h3'>Registration</Typography>
                        </Grid>
                        <Grid item className={classes.divider}>
                            <Divider/>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container direction='row' justify='center' alignContent='space-around' justify='space-around' className={classes.registrationContainer}>
                        <Grid item className={classes.registrationItem} >
                            <Grid container direction='column'>
                                <Grid item>
                                    <Typography variant='h5'>Username</Typography>
                                    <TextField variant='outlined' className={classes.textField}/>
                                </Grid>

                                <Grid item>
                                    <Typography variant='h5'>Name</Typography>
                                    <TextField variant='outlined' className={classes.textField}/>
                                </Grid>

                                <Grid item>
                                    <Typography variant='h5'>E-mail</Typography>
                                    <TextField variant='outlined' className={classes.textField}/>
                                </Grid>
                                <Grid item>Buttons</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.registrationItem}>
                            <Grid container direction='column'>
                                <Typography variant='h5'>City</Typography>
                                <Grid item>
                                    <TextField variant='outlined' className={classes.textField}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h5'>Ride in group?</Typography>
                                    <FormControl component="fieldset" className={classes.radioGroup}>
                                        <RadioGroup
                                            aria-label="position"
                                            name="position"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value="end"
                                                control={<Radio color="primary" />}
                                                label="Always"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Radio color="primary" />}
                                                label="Sometimes"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Radio color="primary" />}
                                                label="Never"
                                                labelPlacement="end"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h5'>Ride in group?</Typography>
                                    <FormControl component="fieldset" className={classes.radioGroup}>
                                        <RadioGroup
                                            aria-label="position"
                                            name="position"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            row
                                        >                                                
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Mon"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Tue"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Wed"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Thu"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Fri"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Sat"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="end"
                                                control={<Checkbox color="primary"/>}
                                                label="Sun"
                                                labelPlacement="end"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        );
    }
}

UserRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
 }

export default withStyles(styles)(UserRegistration)