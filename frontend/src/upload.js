import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadFile = this.loadFile.bind(this);
    }

    handleSubmit(event) {
        console.log('photo received: ', event.target.files[0].name);
        this.setState({
            photo: event.target.files[0]
        });
    }

    loadFile(event){
        console.log('photo received-1: ', event.target.files[0].name);
        var temp  = URL.createObjectURL(event.target.files[0]);
        document.querySelector("#output").style.display = 'inline-block';
        document.querySelector("#output").setAttribute('src', temp);
        document.querySelector("#nextButton").style.display='inline-block';
        this.setState({
            photo: event.target.files[0]
        });
    };

    render() {
        return (
            <div>
                <Typography variant="h3" className="header">
                    Add an Item
                </Typography>
                <form style={{
                    marginTop: "5%",
                    fontSize: 20,
                }} onSubmit={this.handleSubmit}></form>
                <Button variant="outlined" color="primary" >
                    <input type="file" accept="image/*" name="image" id="file" onChange={this.loadFile}
                        style={{ "display": "none" }}></input>
                    <label htmlFor="file" style={{ "cursor": "pointer", marginTop: "5%" }}>Choose File</label>
                </Button>
                <p><img id="output" width="200" alt='upload' style={{"display":"none"}}/></p>
                <Button id="nextButton" variant="outlined" color="primary" style={{ "display": "none" }}>
                    <a href="/charity">Next</a>
                </Button>
            </div>
        )
    }
}

export default Upload;