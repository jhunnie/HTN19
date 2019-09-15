import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Donate from './donate'
import User from './user'
import Charity from './charity'
import Home from './home'
import Upload from './upload';
import Category from './category';

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
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/donate' component={Donate} />
                        <Route exact path='/user' component={User} />
                        <Route exact path='/upload' component={Upload}/>
                        <Route exact path='/charity' component={Charity} />
                        <Route exact path='/category' component={Category} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Homepage