import React from 'react'

const Rows = props => {
    
    var data = props.Data;
    var keys = props.Keys;

    return data.map((row, index) => {
        return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    })

}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={index}>{props.data[key]}</td>
    })
}

export default Rows;