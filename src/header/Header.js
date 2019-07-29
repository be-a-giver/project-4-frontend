import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import {navbar} from 'reactstrap'

const authenticatedOptions = (user) =>(
  
  <React.Fragment>
    {user.helper ?
    " "

    :
    <React.Fragment>
    <Link to='/myProfile'>My Profile</Link>
    {/* <Link to='/createPatients'>Create Sitution</Link> */}
    {/* <Link to="/change-password" className="link">Change Password</Link> */}
    </React.Fragment>
    }

    <Link to="/sign-out" className="link">Sign Out</Link>
    </React.Fragment>
)
const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" >Sign Up</Link>
    <Link to="/sign-in" className="link">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/" >Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/contact">Contact us</Link>
    <Link to="/situations">Medical situations</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    
    {/* <Link to="/situations"><h1 className="title">Be a Giver</h1></Link> */}
    <h1 className="title">BE A GIVER</h1>
    
    <nav className="nav">
      { alwaysOptions }
      {/* { user && <span>Welcome, {user.name}</span>} */}
      { user ? authenticatedOptions(user) : unauthenticatedOptions }
      
    </nav>
  </header>
)



export default Header
