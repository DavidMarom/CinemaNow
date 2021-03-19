import React from 'react'
import { NavLink } from 'react-router-dom'

function _NavBar() {

  return (
    <div className="nav-bar ca">

        <h1>Cinema Now</h1>

        <NavLink to="/">
          <p className="nav-btn">Find Movies</p>
            </NavLink>
        <NavLink to="/shows">
          <p className="nav-btn">Manage Shows</p>
        </NavLink>
    </div>
  )
}

export const NavBar = _NavBar
