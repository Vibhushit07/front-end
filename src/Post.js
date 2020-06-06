import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + this.props.uid);
        const data = await response.json();
        this.setState({ data: data });
    }

    display() {

        const items = this.state.data.map(d => {
            return(
                <ul>
                    <li>{d.id}</li>
                    <ul>
                        <li>{d.title}</li>
                        <li>{d.body}</li>
                    </ul>
                </ul>
            );
        });

        return items;
    }
    
    render(){
        return(
            this.state.data === null ?
                <div></div>
            :
                <div>
                    {this.display()}
                </div>
        );
    }
}

export default Post;