import React from 'react'
import "./MyNavbar.css"
import logo from "../../assets/logo.png"

const MyNavbar = () => {
  return (
    <div className='navbar-container'>
        <img src={logo} alt="/" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Sale</li>
        </ul>
    </div>
  )
}

export default MyNavbar