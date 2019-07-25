import React , {Component} from 'react'
import {Link} from 'react-router-dom'


const Home = () =>(
  
            <div>
                <h1>Be Giver</h1>
            <p>Is an electronic platform that combines rare medical situations <br/>
            that need help from community members and who want to provide help.</p>
            
            <button><Link to='/situations'>Medical situations</Link></button>
           
            </div> 
            
    
    )

export default Home