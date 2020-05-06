import React from 'react'

const AuthControl = props => {
    let buttonText = props.isAuthenticated ? 'Logout' : 'Login';
    return (<a className="ui item">{buttonText}</a>)
}
export default AuthControl;