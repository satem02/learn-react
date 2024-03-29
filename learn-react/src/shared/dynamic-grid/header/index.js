import React from 'react'

const Header = props => {

    var keys = props.Keys;

    return keys.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    });

}
export default Header;