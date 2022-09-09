import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-light bg-light">
  <NavLink to='/'>Data Central</NavLink>
  <NavLink to='/addstudent'>Add Student</NavLink>
</nav>

    </div>
  )
}

export default Navbar