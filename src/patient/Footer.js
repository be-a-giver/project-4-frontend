import React , {Component} from 'react'
import {Link , Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'

const Footer = () =>(
  
            <div>
                <footer>
                 <Route path="/about" component={About} />
                 <Route path="/contact" component={Contact} />

                 <Link to="/about">About | </Link>
                 <Link to="/contact"> Contact</Link>

                 <p className="copyright"> Copyright &copy;2019 Be a Giver </p>
                </footer>
                
            </div>
    
    )

export default Footer 