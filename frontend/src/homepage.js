import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './user'
import Charity from './charity'
import Home from './home'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentWillMount(){
        
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/user' component={User} />
                        <Route exact path='/charity' component={Charity} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Homepage