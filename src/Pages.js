import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Pages
import home from './pages/home/index';
import login from './pages/Login/index';
import signup from './pages/signup';
import profile from './pages/Profile/index';

function Pages() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {home}/>
        <Route exact path = "/login" component = {login}/>
        <Route exact path = "/signup" component = {signup}/>
        <Route exact path = "/profile/" component = {profile}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Pages;
