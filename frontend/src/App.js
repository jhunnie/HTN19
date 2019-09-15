import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Homepage from './homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: []
    }
  }

  componentWillMount() {
    let homePage = [];
    homePage.push(<Homepage appContext={this} />)
    this.setState({
      currPage: homePage
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" style={{
          alignItems: 'center',
          position: 'center',
        }}>
          <Toolbar>
            <Typography variant="h2"><a href="/" style={{color:'white', textDecoration:'none'}}>Match to Donate</a></Typography>
          </Toolbar>
        </AppBar>
        {this.state.currPage}
      </div>
    );
  }

}

export default App;


