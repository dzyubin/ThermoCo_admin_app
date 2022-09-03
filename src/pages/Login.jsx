import React, { useState } from 'react'
import apiInstance, { me, login } from '../api/api'
import { useNavigate } from 'react-router-dom'
import useGlobalState from '../globalState'

// import "./styles.css";

function Login () {
  // React States
  // const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted] = useState(false)
  const navigate = useNavigate()

  /* eslint-disable */
  const [user, setUser] = useGlobalState('user')
  const [isLoggedIn, setIsLoggedIn] = useGlobalState('isLoggedIn')
  /* eslint-enable */

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault()
    const { uname, pass } = document.forms[0]

    // TODO: use apiInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; instead
    const params = new URLSearchParams()
    params.append('username', uname.value)
    params.append('password', pass.value)

    login(params)
      .then(res => {
        apiInstance.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`
        me()
          .then(res => {
            setUser(res.data)
            setIsLoggedIn(true)
          })
          .catch(err => console.log(err))

        navigate('/dashboard')
      })
      .catch(err => console.log(err))

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value)

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: 'pass', message: errors.pass })
    //   } else {
    //     setIsSubmitted(true)
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: 'uname', message: errors.uname })
    // }
  }

  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   )

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage('uname')} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage('pass')} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

export default Login
