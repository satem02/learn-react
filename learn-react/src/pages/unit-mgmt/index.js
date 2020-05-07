
import React, { Component } from 'react'
import DynamicGrid from '../../shared/dynamic-grid';
import axios from 'axios';

class UnitManagement extends Component {

    state = { data: [] };

    render() {
        let grid = this.state.data.length == 0 ? null : <DynamicGrid Data={this.state.data} />;

        return (
            <div className="ui container">
                <div className="ui animated button" tabIndex="0" onClick={this.loadData}>
                    <div className="visible content">Load Data</div>
                    <div className="hidden content">
                        <i className="play icon"></i>
                    </div>
                </div>
                {grid}
            </div>
        )
    }

    loadData = () => {
        console.log("Data is loading...");
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res => this.setState({ data: res.data }))
            .catch(e => console.log(e))
    }
}

export default UnitManagement;