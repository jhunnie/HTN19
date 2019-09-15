import React, { Component } from 'react';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount(){
        //get array of categories and update list of categories 
        this.setState({
            categories: []
        })
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default Category;