import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './components/common/notFound';
import UserSearch from './components/users/search';
import UserRegistration from './components/users/registration';
import { Grid } from '@material-ui/core';
import TopBar from './components/appBar/topBar';
import MiddleBar from './components/appBar/middleBar';
import BottomBar from './components/appBar/bottomBar';
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
   bottomBar: {
      background:'#baebe1',
      padding: 60
   },
}))

function App() {
  const classes = styles()
  return (
    <>
      <Grid container direction='column'v>      
          <Grid item>
            <TopBar/>
          </Grid>
          <Grid item>
            <MiddleBar/>
          </Grid>
          <Grid item className={classes.bottomBar}>
            <BottomBar/>
          </Grid>
      </Grid>
        <Grid container justify='center'>
          <Switch>
            <Redirect from="/" exact to="/users" />
            <Route path="/users/new" component={UserRegistration} />
            <Route path="/users" component={UserSearch} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </Grid>
    </>
  );
}

export default App;
