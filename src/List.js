import React, { Component } from 'react';

class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json();
        console.log(data);
        this.setState({data: data});
    }

    list() {
        const items = this.state.data.map(d => {
            return(
                <ul onClick = { () => this.props.setuid(d.id)} >
                    <li>{d.id}</li>
                    <li>{d.name}</li>
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
                { this.list() }
            </div>
        );
    }
}

export default List;