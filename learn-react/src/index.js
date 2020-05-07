import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import defaultReducer from './state/reducers'
import { Provider } from 'react-redux'

// bu şekilde default export edilen kullanılır.
// {Root} bu sekilde birden fazla export olabilir.
import Root from './components/root'

const myStore = createStore(defaultReducer,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={myStore}>
            <Root />
        </Provider>
    </BrowserRouter>, document.querySelector("#root")
);