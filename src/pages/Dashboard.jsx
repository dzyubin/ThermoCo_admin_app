import React from 'react'
import useGlobalState from '../globalState'
function Dashboard () {
  const [user] = useGlobalState('user')

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>User</h2>
      <p>Full name: {user.full_name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Dashboard
