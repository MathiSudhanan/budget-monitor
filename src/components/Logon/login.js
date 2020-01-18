/** @format */

import React from 'react'
import './login.css'

const state = {
  login: '',
  password: '',
}

Login.propTypes = {}

function Login(props) {
  return (
    <div className="logon-container">
      <div className="logon-container-item">
        <div className="logon-container-item-header">
          <h3> Log on into Budget Monitor </h3>
        </div>
        <div className="logon-container-item-content">
          <div>
  <input type="text" placeholder="Login Name / Email">{props.}</input>
          </div>
          <div>
            <input type="text" placeholder="Password" type="password"></input>
          </div>
        </div>
        <div className="logon-container-item-footer">
          <div className="logon-container-item-02">
            <input className="button" type="button" value="Login"></input>
          </div>
          <div>
            <span>By clicking this button you agree the terms and conditions</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
