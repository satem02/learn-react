import React from 'react'


export class TableRow extends React.Component {
    render() {
        return (
        <tr>
          {Object.keys(this.props).map((item,index)=><td key={index}>{this.props[item]}</td>)}
        </tr>)
    }
}