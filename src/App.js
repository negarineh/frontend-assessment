import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Ex1 from './components/Exercise1/Layout';
import Ex2 from './components/Exercise2/Tabs';
import Main from './components/main';

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path='/ex1' component={Ex1}/>
                <Route path='/ex2' component={Ex2}/>
                <Route path='/' exact component={Main}/>
            </Switch>
        );
        return (
            <div>
                {routes}
            </div>
        );
    }
}

export default App;
