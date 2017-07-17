import * as React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = props =>
  <div className="Header">
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
        {' | '}
        <NavLink to="/courses">Courses</NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </div>

export default Header
