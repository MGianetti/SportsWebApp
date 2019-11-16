import React, { Component } from "react";
import { Grid, Typography, Checkbox, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  externalContainer: {
    maxWidth: "80%"
  },
  searchBar: {
    height: 200
  },
  dividerUsers: {
    width: "80%",
    paddingLeft: 60,
    paddingRight: 60
  },
  registrationContainer: {
    paddingTop: 10,
    height: 500
  },
  registrationItem: {},
  radioGroup: {
    //marginBottom: 30,
    width: "25vw",
    height: 86
  },
  saveButton: {
    marginRight: 10,
    backgroundColor: "#1abc9c",
    color: "white"
  },
  discardButton: {
    backgroundColor: "#e3e3e3",
    color: "dark gray"
  },
  margin: {
    marginBottom: 30,
    width: "25vw",
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#1abc9c"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#1abc9c"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#1abc9c"
    }
  },
  notchedOutline: {},
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  buttonsContainer: {
    paddingBottom: 60
  },
  divider: {
    marginTop: 15,
    marginBottom: 80
  },
  root: {
    color: "gray",
    "&$checked": {
      color: "#1abc9c"
    }
  },
  checked: {}
});

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      city: "",
      rideInGroup: {
        always: true,
        sometimes: false,
        never: false
      },
      daysOfTheWeek: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      },
      posts: "",
      albuns: "",
      photos: "",
      trash: ""
    };
  }

  handleTextFieldChange = event => {
    let state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  handleRideInGroupChange = event => {
    let rideInGroup = {
      always: false,
      sometimes: false,
      never: false
    };
    rideInGroup[event.target.name] = true;
    this.setState({ rideInGroup });
  };

  handleDiscardUser = () => {
    this.setState({
      username: "",
      name: "",
      email: "",
      city: "",
      rideInGroup: {
        always: true,
        sometimes: false,
        never: false
      },
      daysOfTheWeek: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      },
      posts: "",
      albuns: "",
      photos: "",
      trash: ""
    });
  };

  handleSaveUser = () => {
    const {
      username,
      name,
      email,
      city,
      rideInGroup,
      daysOfTheWeek,
      posts
    } = this.state;
    const { always, sometimes, never } = rideInGroup;
    const { mon, tue, wed, thu, fri, sat, sun } = daysOfTheWeek;

    localStorage.setItem(this.state.username, [
      username,
      name,
      email,
      city,
      always,
      sometimes,
      never,
      mon,
      tue,
      wed,
      thu,
      fri,
      sat,
      sun
    ]);
    alert("User saved with success!");
    this.setState({
      username: "",
      name: "",
      email: "",
      city: "",
      rideInGroup: {
        always: true,
        sometimes: false,
        never: false
      },
      daysOfTheWeek: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      },
      posts: "",
      albuns: "",
      photos: "",
      trash: ""
    });
  };

  handleDayOsTheWeekChange = event => {
    let { daysOfTheWeek } = this.state;
    daysOfTheWeek[event.target.name] = !daysOfTheWeek[event.target.name];
    this.setState({ daysOfTheWeek });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.externalContainer} direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.searchBar}
            alignContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3">Registration</Typography>
            </Grid>
            <Grid item className={classes.dividerUsers}>
              <Divider />
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="space-around"
            justify="space-around"
            className={classes.registrationContainer}
          >
            <Grid item className={classes.registrationItem}>
              <Grid container direction="column">
                <FormControl className={classes.margin}>
                  <Grid item>
                    <Typography variant="h5">Username</Typography>
                    <TextField
                      name="username"
                      helperText="Choose your username"
                      value={this.state.username}
                      onChange={this.handleTextFieldChange}
                      className={classes.margin}
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        }
                      }}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">Name</Typography>
                    <TextField
                      name="name"
                      helperText="Type in your name"
                      value={this.state.name}
                      onChange={this.handleTextFieldChange}
                      className={classes.margin}
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        }
                      }}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">E-mail</Typography>
                    <TextField
                      name="email"
                      helperText="Type in your e-mail"
                      value={this.state.email}
                      onChange={this.handleTextFieldChange}
                      className={classes.margin}
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        }
                      }}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </Grid>
                </FormControl>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item className={classes.buttonsContainer}>
                      <Button
                        className={classes.saveButton}
                        onClick={this.handleSaveUser}
                      >
                        Save
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.discardButton}
                        onClick={this.handleDiscardUser}
                      >
                        Discard
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.registrationItem}>
              <Grid container direction="column">
                <Typography variant="h5">City</Typography>
                <Grid item>
                  <TextField
                    name="city"
                    helperText="Type in your city"
                    value={this.state.city}
                    onChange={this.handleTextFieldChange}
                    className={classes.margin}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused
                      }
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">Ride in group?</Typography>
                  <FormControl
                    component="fieldset"
                    className={classes.radioGroup}
                  >
                    <RadioGroup
                      aria-label="position"
                      name="position"
                      value={this.state.value}
                      onChange={this.handleChange}
                      row
                    >
                      <FormControlLabel
                        name="always"
                        value="end"
                        control={
                          <Radio
                            checked={this.state.rideInGroup.always}
                            onChange={this.handleRideInGroupChange}
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Always"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        name="sometimes"
                        value="end"
                        control={
                          <Radio
                            checked={this.state.rideInGroup.sometimes}
                            onChange={this.handleRideInGroupChange}
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Sometimes"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        name="never"
                        value="end"
                        control={
                          <Radio
                            checked={this.state.rideInGroup.never}
                            onChange={this.handleRideInGroupChange}
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Never"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography variant="h5">Days of the week</Typography>
                  <FormControl
                    component="fieldset"
                    className={classes.radioGroup}
                  >
                    <RadioGroup
                      aria-label="position"
                      name="position"
                      value={this.state.value}
                      onChange={this.handleChange}
                      row
                    >
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.mon}
                        name="mon"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Mon"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.tue}
                        name="tue"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Tue"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.wed}
                        name="wed"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Wed"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.thu}
                        name="thu"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Thu"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.fri}
                        name="fri"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Fri"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.sat}
                        name="sat"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
                        label="Sat"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        onChange={this.handleDayOsTheWeekChange}
                        checked={this.state.daysOfTheWeek.sun}
                        name="sun"
                        value="end"
                        control={
                          <Checkbox
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                        }
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
      </Grid>
    );
  }
}

UserRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRegistration);
