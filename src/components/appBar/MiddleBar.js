import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  externalContainer: {
    height: 60,
    backgroundColor: "#f9f9f9"
  }
});

class MiddleBar extends Component {
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
        className={classes.externalContainer}
      ></Grid>
    );
  }
}

MiddleBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiddleBar);
