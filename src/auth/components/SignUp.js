import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      name :'',
      ID:'',
      mobileNumber:'',
      password: '',
      password_confirmation: ''

    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const {name, ID, mobileNumber, email, password, password_confirmation } = this.state

    return (
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />

        <label htmlFor="name">Name</label>
                <input
                  required
                  name="name"
                  value={name}
                  type="text"
                  placeholder="name"
                  onChange={this.handleChange}
                />

        <label htmlFor="ID">ID</label>
                <input
                  required
                  name="ID"
                  value={ID}
                  type="text"
                  placeholder="ID"
                  onChange={this.handleChange}
                />

        <label htmlFor="mobileNumber"> Mobile Number</label>
                        <input
                          required
                          name="mobileNumber"
                          value={mobileNumber}
                          type="text"
                          placeholder="mobileNumber"
                          onChange={this.handleChange}
                        />

        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
          required
          name="password_confirmation"
          value={password_confirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)
