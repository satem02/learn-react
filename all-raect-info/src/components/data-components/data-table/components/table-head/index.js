import React from 'react'

export default class TableHead extends React.Component {
    render() {
        return <thead>
            <tr>
                {
                    this.props.headers.map((item, index)=><th key={index}>{item}</th>)
                }
            </tr>
        </thead>
    }
} 