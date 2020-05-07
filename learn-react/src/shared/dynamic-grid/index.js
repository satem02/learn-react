import React from 'react';
import Header from './header';
import Rows from './rows';

const DynamicGrid = props => {
    var data = props.Data;
    var keys = Object.keys(data[0]);

    return (
        <table className="ui selectable celled table">
            <thead>
                <tr><Header Keys={keys} /></tr>
            </thead>
            <tbody>
                {<Rows Keys={keys} Data={data} />}
            </tbody>
        </table>
    );
}

export default DynamicGrid;
