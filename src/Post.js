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
                <tr>
                    <td>{d.id}</td>
                    <td>{d.title}</td>
                    <td>{d.body}</td>
                </tr>
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
                    <table>
                        <thead>
                            <td>Post Id</td>
                            <td>Post Title</td>
                            <td>Post Body</td>
                        </thead>
                        <tbody>
                            { this.display() }
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default Post;