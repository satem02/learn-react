import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// bu şekilde default export edilen kullanılır.
// {Root} bu sekilde birden fazla export olabilir.
import Root from './components/root'

ReactDOM.render(<BrowserRouter><Root/></BrowserRouter>,document.querySelector("#root"));