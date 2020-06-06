import React, { Component } from 'react';
import List from './List';
import Post from './Post';

class Display extends Component {

    constructor(props){
        super(props);

        this.state = {
            uid: null
        }

        this.setuid = this.setuid.bind(this);
    }

    setuid(id) {
        this.setState({uid: id});
    }

    render(){
        return(
            this.state.uid === null ?
                <List setuid = { this.setuid } />
            :
                <Post uid = { this.state.uid } />
        );
    }
}

export default Display;