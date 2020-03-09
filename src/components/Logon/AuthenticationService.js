/** @format */

const AuthenticationService = {
  ValidateuserName: function validateUserName(userName, password) {
    console.log(userName)
    console.log(password)
    return userName === 'mathi' && password === 'test'
  },
}

export default AuthenticationService
