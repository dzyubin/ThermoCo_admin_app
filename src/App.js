import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { NavMenu } from './components/NavMenu'

function App () {
  return (
    <div className="App">
      <NavMenu />
      <Outlet />
    </div>
  )
}

export default App
