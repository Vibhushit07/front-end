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
        this.setState({data: data});
    }

    list() {
        const items = this.state.data.map(d => {
            return(
                <tr onClick = { () => this.props.setuid(d.id)} >
                    <td>{d.id}</td>
                    <td>{d.name}</td>
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
                        <td>User Id</td>
                        <td>User name</td>
                    </thead>
                    <tbody>
                        { this.list() }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default List;