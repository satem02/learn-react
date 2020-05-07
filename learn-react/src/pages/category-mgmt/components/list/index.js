
import React, { Component } from 'react'
import DynamicGrid from '../../../../shared/dynamic-grid';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDataActionCreator, ACTION_TYPE_CATEGORY } from '../../../../state/actions';


class List extends Component {

    render() {
        let grid = this.props.localCategories.length == 0 ? null : <DynamicGrid Data={this.props.localCategories} />;

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
            .then(res => this.props.dispatch(setDataActionCreator(ACTION_TYPE_CATEGORY, res.data)))
            .catch(e => console.log(e))
    }
}

const mapStateToProps = (state) => {
    return { localCategories: state.categories }
}

export default connect(mapStateToProps)(List)