import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";
import TitlePage from "./components/titlePageComponents/TitlePage/TitlePage";

//Pages
import home from './pages/home/index';
import commenthome from './pages/commenthome/index';
import login from './pages/Login/index';
import profile from './pages/Profile/index';
import userprofile from './pages/profileuser';

const App = ( props ) => {
    //const user = useSelector(selectUser);
   
    return(
    <>
    { !props.loginToHomepage.login ? <TitlePage /> : (
    <BrowserRouter>
        <Switch>
        <Route exact path = "/" component = {home}/>
        <Route exact path = "/comments" component = {commenthome}/>
        <Route exact path = "/login" component = {login}/>
        <Route exact path = "/user-profile" component = {userprofile}/>
        <Route exact path = "/profile/" component = {profile}/>
         </Switch>
    </BrowserRouter>
    ) }
    </>
    )
}

const mapStateToProps = (state) =>{
    return {
        loginToHomepage: state.loginToHomepage
    }
}

export const selectLogin = (state) => state.loginToHomepage;

export default connect(mapStateToProps, null)(App);

