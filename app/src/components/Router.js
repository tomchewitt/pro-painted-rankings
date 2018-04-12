import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Painters from './Painters';
import Painter from './Painter';
import Tournaments from './Tournaments';
import Tournament from './Tournament';
import NotFound from './NotFound';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/painters" />
                    </Route>
                    <Route exact path="/painters" component={Painters} />
                    <Route path="/painters/:name" component={Painter} />
                    <Route exact path="/tournaments" component={Tournaments} />
                    <Route path="/tournaments/:name" component={Tournament} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;
