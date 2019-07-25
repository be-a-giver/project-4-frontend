import React ,{Component} from 'react'
import {Link , Route} from 'react-router-dom'
class Home extends Component {
    render(){
        return(
            <div> 
                <h1>Medical Situations </h1>
                <img src="https://www.rcem.ac.uk/images/For%20patients.jpg " height="300" width="300"/>
                <img src="https://www.rcem.ac.uk/images/For%20patients.jpg " height="300" width="300"/>
                <img src="https://www.rcem.ac.uk/images/For%20patients.jpg " height="300" width="300"/>

                <br/> 
                {/* <Route path="/need" Component={Need}/> */}
                {/* <Link to='/need'>Do you need help?</Link>      */}
                {/* <button>Do you need help?</button> */}
            </div>
           

        
        )
    }
}
export default Home