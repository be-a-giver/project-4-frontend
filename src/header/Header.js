import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import {navbar} from 'reactstrap'


const authenticatedOptions = (user) => (
  <React.Fragment>

    <Link to='/myProfile'>My Profile</Link>
    {/* <Link to='/createPatients'>Create Sitution</Link> */}




  
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    
    {/* </nav> */}
  </React.Fragment>
)



const unauthenticatedOptions = (
  <React.Fragment>
      <nav class="navbar navbar-dark bg-dark">
    <Link to="/signup">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    </nav>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">

    <Link to='/situations'><h1>Be a Giver</h1></Link>
    

    <nav>
      { user && <span>Welcome, {user.name}</span>}
      { user ? authenticatedOptions(user) : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)



export default Header
