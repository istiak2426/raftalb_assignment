import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Auth from './Auth/Auth';

import Logout from "./Auth/Logout"
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

const Main = (props)=> {

 
    props.authCheck();
  
     
        let routes = null;
        if (props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
             
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Menu />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);


