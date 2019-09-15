import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    render(){
        return(
            <div style={{marginTop:20}}>
                <Typography variant="h3">Welcome!</Typography>
                <Typography variant="h5">Sign in to donate and view your previous donations.</Typography>
                <a href="./donate"> <Button variant="contained" style={{marginTop:20, width:250, textDecoration:"none"}}> Donate Now</Button></a>
                <p>or</p>
                <Button variant="contained" style={{width:250, textDecoration:"none"}}>Sign In with Gmail</Button>
            </div>
        )
    }
}

export default Home;