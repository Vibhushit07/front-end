import React, { Component } from 'react';

class Header extends Component {

    render(){
        return(
            <div>
                <input type = "text" placeholder = "Enter user name" /> 
                <input type = "button" placeholder = "Search" value = "Search" />
            </div>
        )
    }
}

export default Header;