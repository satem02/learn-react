import React from 'react'
import { TableRow } from '../table-row'

export default class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {this.props.data.map((item, index) => <TableRow key={index} {...item} />)}
            </tbody>)
    }
}