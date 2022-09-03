import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobalState from '../globalState'
import apiInstance from '../api/api'

export function NavMenu () {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState('isLoggedIn')
  const navigate = useNavigate()

  const onLogout = () => {
    setIsLoggedIn(false)
    apiInstance.defaults.headers.common.Authorization = null
    navigate('/')
  }

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link> |{' '}
      {isLoggedIn ? <button onClick={onLogout}>Logout</button> : ''}
    </div>
  )
}
