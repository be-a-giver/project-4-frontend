import React,{Component} from 'react'
 
import {Link} from'react-router-dom'
class SignUpBoth extends Component {
  render( ) {
    return (
      <React.Fragment>
        <nav class="navbar navbar-dark bg-dark">
        <Link to="/sign-up">Sign Up as user</Link>
        <Link to="/sign-up/helper">Sign Up As helper</Link>
        </nav>
       </React.Fragment>
    )
  }
}
export default SignUpBoth;