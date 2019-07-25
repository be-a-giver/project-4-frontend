import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to='/patients'>Patients</Link>
    <Link to='/createPatients'>Create Sitution</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/home">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <div>
  <header className="main-header">
    <h1>Be a Giver</h1>
    <nav>
      { user && <span>Welcome, {user.name}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
  </div>
)

export default Header