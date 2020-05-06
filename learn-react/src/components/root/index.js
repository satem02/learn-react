import React from 'react';
import Header from '../header';
import Routing from '../routing';

// Functional Component orneği.Birde class componentler var. // bu yazma sekline JSX denir.
const Root = () =>
    <div className="ui container">
        <Header />
        <Routing />
    </div>

export default Root;