/** @format */

import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthenticationService from './AuthenticationService'
import './login.css'

Login.propTypes = {
  login: PropTypes.string,
  password: PropTypes.string,
}

function Login() {
  const [userName, onUserNameChange] = useState('')
  const [password, onPasswordChange] = useState('')

  const history = useHistory()

  // function onUserNameChange(e) {
  //   console.log(e.target.value)
  //   // this.setState({[e.target.name]: e.target.value})
  // }

  // function onPasswordChange(e) {
  //   console.log(e.target.value)
  //   // this.setState({[e.target.name]: e.target.value})
  // }

  function handleClick() {
    if (AuthenticationService.ValidateuserName(userName, password)) {
      history.push('/Dash')
    } else {
      alert('Invalid UserName / Password.')
    }
  }
  return (
    <div className="logon-container">
      <div className="logon-container-item">
        <div className="logon-container-item-header">
          <h3> Log on into Budget Monitor </h3>
        </div>
        <div className="logon-container-item-content">
          <div>
            <input
              className="login-text"
              type="text"
              placeholder="Login Name / Email"
              value={userName}
              onChange={e => onUserNameChange(e.target.value)}></input>
          </div>
          <div>
            <input
              className="login-text"
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => onPasswordChange(e.target.value)}></input>
          </div>
        </div>
        <div className="logon-container-item-footer">
          <div className="logon-container-item-02">
            <input className="button" type="button" value="Login" onClick={handleClick.bind(this)}></input>
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
