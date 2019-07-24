import React , {Component} from 'react'
import {Link} from 'react-router-dom'


const Welcome = () =>(
  
            <div>
                <h1>Be Giver</h1>
            <p>Is an electronic platform that combines rare medical situations <br/>
            that need help from community members and who want to provide help.</p>
            
            <button><Link to='/need'>Do you need help?</Link></button>
            </div> 
            
    
    )

export default Welcome