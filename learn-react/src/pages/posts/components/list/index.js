import React from 'react'
import axios from 'axios'
export default class List extends React.Component {
    state = { data: [] }
    loadData = () => {
        console.log("Data is loading...");
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => { this.setState({ data: res.data }) })
            .catch(e => console.log(e))
    }


    render() {
        return (
            <div className="ui container"><div>
                <div className="ui animated button" tabIndex="0" onClick={this.loadData}>
                    <div className="visible content">Load Data</div>
                    <div className="hidden content">
                        <i className="play icon"></i>
                    </div>
                </div>
            </div>
                <table className="ui selectable celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(row => (
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
} 