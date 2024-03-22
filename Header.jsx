import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
  <div className="container-fluid bg-black text-white">
   <h3>React Routing</h3>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-5 ">
        <li className="nav-item mx-5">
          <Link className="nav-link text-white" to="/home">Home</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text-white" to="/products">Products</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text-white" to="/profile">Profile</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text-white" to='/help'>Help</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header