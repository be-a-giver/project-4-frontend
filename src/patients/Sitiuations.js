import React ,{Component} from 'react'
import {Link , Route} from 'react-router-dom'


class Situations extends Component {
    render(){
        return(
            <div> 
                <h1 className="medecal-sit">Medical Situations </h1>

                {/* code for add situation */}
                <br/>
                {/* <Route path="/situations" Component={Situations}/> 
                <Route path="/situations" Component={Situations}/>  */}
                {this.props.user ? 
                <div>
                    <button className="butt"><Link to='/createPatients'>Do you need help ?</Link></button>
                    <button className="butt"><Link to='/want'>Do you want to help ? </Link></button> 
                </div>
                :
                <div>
                    <button className="butt"><Link to='/sign-up'>Do you need help ?</Link></button>
                     <button className="butt"><Link to='/sign-up'>Do you want to help ? </Link></button>
                </div>
                }
                


                <br/> 
                {/* <Route path="/need" Component={Need}/> */}
                {/* <Link to='/need'>Do you need help?</Link>      */}
                {/* <button>Do you need help?</button> */}
            </div>
           

        
        )
    }
}
export default Situations