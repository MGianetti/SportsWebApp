import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  avatar: {
    marginRight: 25
  },
  name: {
    marginRight: 25
  },
  chevron: {
    marginRight: 90
  }
});

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" direction="row">
        <Grid item className={classes.avatar}>
          <Avatar />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" direction="row">
            <Grid item className={classes.name}>
              <Typography>Jason Bourne</Typography>
            </Grid>
            <Grid item className={classes.chevron}>
              <FontAwesomeIcon size="2x" color="#808080" icon={faChevronDown} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

DropDownMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropDownMenu);
