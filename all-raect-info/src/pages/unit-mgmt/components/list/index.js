import React from 'react'
import axios from 'axios'
import DataTable from '../../../../components/data-components/data-table'
import { connect } from 'react-redux'
import { setDataActionCreator,ACTION_SET_DATA, ACTION_TYPE_UNIT } from '../../../../actions'
class UnitList extends React.Component {

    componentDidMount = () => {
        axios
            .post('http://178.128.248.160:81/api/auth', { "username": "mgani.tombalak@yahoo.com", "password": "123456" })
            .then(res => {
                let token = res.data.token;
                axios.get("http://178.128.248.160:81/api/unit", { headers: { Authorization: `Bearer ${token}` } })
                    .then(res => this.props.setDataActionCreator(ACTION_TYPE_UNIT, res.data.data))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e));
    }

    render() {
        // throw("My exception"); TESTING FOR ERRORBOUNDRY
        const table = (this.props !== undefined && this.props.units.length > 0) ? <DataTable data={this.props.units} /> : null;
        return (
            <div className="ui container">
                <div className="ui animated button" tabIndex="0" onClick={this.loadData}>
                    <div className="visible content">Load Data</div>
                    <div className="hidden content">
                        <i className="play icon"></i>
                    </div>
                </div>
                {table}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { units: state.units ?? []}
}

export default connect(mapStateToProps,{setDataActionCreator})(UnitList) // mapDisptchToProps
// export default connect(mapStateToProps,{setDataActionCreator})(List)