import React from 'react';
import ReactDOM from 'react-dom';

// bu şekilde default export edilen kullanılır.
// {Root} bu sekilde birden fazla export olabilir.
import Root from './components/root'


ReactDOM.render(<Root></Root>,document.querySelector("#root"))