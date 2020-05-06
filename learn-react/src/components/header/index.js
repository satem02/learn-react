import React from 'react';
import ReactDOM from 'react-dom';

// Functional Component orneği.Birde class componentler var.
const Header = () =>
    <div className="ui secondary menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search..." />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
            </div>
            <a className="item">Logout</a>
        </div>
    </div>;

export default Header;