import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMov } from "../store/actions/movActions";
import { NavLink } from 'react-router-dom'

function _NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMov());
  }, []);

  // const test = useSelector((state) => state.movReducer.mov);

  return (


    <div className="nav-bar ca">

      <h1>Cinema Now</h1>

      <NavLink to="/">
        <p className="nav-btn">Find Movies</p>
      </NavLink>

      <NavLink to="/movies">
        <p className="nav-btn">Our Movies</p>
      </NavLink>

      <NavLink to="/shows">
        <p className="nav-btn">Manage Shows</p>
      </NavLink>
    </div>
  )
}

export const NavBar = _NavBar
