import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './components/common/notFound';
import UserSearch from './components/users/search';
import UserRegistration from './components/users/registration';

function App() {
  return (
    <>
      <Switch>
        <Redirect from="/" exact to="/users" />
        <Route path="/users/new" component={UserRegistration} />
        <Route path="/users" component={UserSearch} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
