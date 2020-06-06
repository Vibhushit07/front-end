import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: null
        }
    }

    submit() {
        this.setState({name: document.getElementById("name").value});
    }

    render(){
        return(
            <div id = "header">
                <input type = "text" placeholder = "Enter user name" id = "name" /> 
                <input type = "button" placeholder = "Search" value = "Search" onClick = {() => this.submit()} />
                {
                    this.state.name === null ?
                        <div> </div>
                    :
                        <div>
                            <p>Name: {this.state.name}</p>
                        </div>
                }
            </div>
        )
    }
}

export default Header;