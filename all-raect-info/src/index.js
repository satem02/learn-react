import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import defaultReducer from './reducers'
import { Provider } from 'react-redux'
import ErrorBoundry from './components/error-boundry'
import createSageMiddleware from 'redux-saga'
import mySagaMiddlewareSetup from './saga'

// CREATING MIDDLEWARE
const myMiddleWare = createSageMiddleware();
// CREATING STORE
const myStore = createStore(defaultReducer, applyMiddleware(myMiddleWare));

myMiddleWare.run(mySagaMiddlewareSetup);

// React Context System
ReactDOM.render(<ErrorBoundry><BrowserRouter><Provider store={myStore}><Root /></Provider></BrowserRouter></ErrorBoundry>, document.querySelector("#root"));