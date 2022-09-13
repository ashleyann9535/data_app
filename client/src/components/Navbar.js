import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-transparent.png'


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-light borderBottom rounded mb-3">
    
  <NavLink to='/' className="navbar-brand" > <img src={logo} alt= 'logo' width="30" height="30" className="d-inline-block align-top" /> Data Central</NavLink>
</nav>

    </div>
  )
}

export default Navbar