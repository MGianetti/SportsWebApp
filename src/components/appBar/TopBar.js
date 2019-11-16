import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from "./DropDown";

const styles = theme => ({
  externalContainer: {
    height: 120
  },
  logoContainer: {
    marginLeft: 50
  },
  dropDownMenu: {},
  logoSquare: {
    paddingRight: 15
  },
  logoText: {
    fontWeight: 500
  }
});

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.externalContainer}
        justify="space-between"
      >
        <Grid item>
          <Grid
            container
            className={classes.logoContainer}
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <FontAwesomeIcon
                size="4x"
                color="#3ac5a9"
                icon={faSquare}
                className={classes.logoSquare}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.logoText} variant="h4">
                Venturus Sports
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.dropDownMenu}>
            <Grid item>
              <DropDownMenu />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
