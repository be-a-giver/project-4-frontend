import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <h1 className="quistion">What is Be a Giver?</h1>
            <p>Is an electronic platform that combines rare medical situations <br/>
            that need help from community members and who want to provide help.</p>

            <img src=""/>
            
            <div className="shape1">
                <img src=" https://images.unsplash.com/photo-1498872270484-7ffbfa6951ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image"/>
            
            </div>
            <div className ="needhelp">
            <p >"People appreciate and never forget that helping hand <br/>
                especially when times are tough."  </p>
                <h5 >-Catherine Pulsifer </h5>
                {/* <Link to='/createPatients'>Do you need help ?</Link> */}
                {this.props.user ? 
                <div >
                     <button className=" butt "><Link className="med-sit" to='/createPatients'><span>Do you need help ?</span></Link></button>
                </div>
                :
                <div >
                     <button className=" butt "><Link className="med-sit" to='/sign-up'><span>Do you need help ?</span></Link></button>
                </div>
                }
                </div>
            
            <div className="shape2">
                <img src=" https://images.unsplash.com/photo-1498872270484-7ffbfa6951ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="image"/>
            </div>

            <div className="wantohelp">
            <p>"People appreciate and never forget that helping hand <br/>
                especially when times are tough."  </p>
                <h5>-Catherine Pulsifer </h5>
                {/* <Link to='/createPatients'>Do you need help ?</Link> */}
                {this.props.user ?
                 <div >
                    <button className=" butt "><Link className="med-sit" to='/want'><span>Do you want to help ?</span></Link></button> 
                </div>
                    :
                <div >
                    <button className="butt "><Link  className="med-sit" to='/sign-up/helper'><span>Do you want to help ?</span> </Link></button>
               </div>
                    }
                </div>
                
            
            <button className="butt">
            <Link to='/situations' className="med-sit"><span>Medical situations</span></Link>
           </button>
            </div> 
        )
    }
}


export default Home