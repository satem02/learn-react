import React from 'react'
import TableHead from './components/table-head'
import TableBody from './components/table-body'

export default class DataTable extends React.Component {
    render() {
        const headers = Object.keys(this.props.data[0]).map(key=>key.toUpperCase());
        return <table className="ui selectable celled table">
            <TableHead headers={headers} />
            <TableBody data={this.props.data} />
        </table>
    }
}