import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Painters from './Painters';
import Painter from './Painter';
import Tournaments from './Tournaments';
import Tournament from './Tournament';
import About from './About';
import NotFound from './NotFound';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/painters" />
                    </Route>
                    <Route exact path={ process.env.PUBLIC_URL + '/painters' } component={Painters} />
                    <Route path={ process.env.PUBLIC_URL + '/painters/:name' } component={Painter} />
                    <Route exact path={ process.env.PUBLIC_URL + '/tournaments' } component={Tournaments} />
                    <Route path={ process.env.PUBLIC_URL + '/tournaments/:name' } component={Tournament} />
                    <Route exact path={ process.env.PUBLIC_URL + '/about' } component={About} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
