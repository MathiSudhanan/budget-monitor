/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './components/Logon/login'

// eslint-disable-next-line
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/Dash" component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
