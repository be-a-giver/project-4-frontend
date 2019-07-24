import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'


class Need extends Component {
    state = {
        dataForm : {
            "patientName": '',
            "age" : '',
            "city" :'',
            "image" :'',
            "hospital" : '',
            "fileNumber" : '',
            "medicalReport" :''
        }
    }

    handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newPatient = this.state.dataForm
        const user = this.props.user
        create(user,newPatient)
        .then(() => alert('created'))
        .then(() => this.props.history.push('/patients'))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <center>
            <form onSubmit={this.handleSubmit}>
            <label>Petient Name</label>
            <input onChange={this.handleChange} type="text" name="patientName" value={this.state.dataForm.patientName}/>
            <br/>
            <label>Age</label>
            <input  onChange={this.handleChange} type="text" name="Age" value={this.state.dataForm.Age}/>
            <br/>
            <label>City</label>
            <input  onChange={this.handleChange} type="text" name="city" value={this.state.dataForm.city}/>
            <br/>
            <label>Image</label>
            <input  onChange={this.handleChange} type="text" name="image" value={this.state.dataForm.image}/>
            <br/>
            <label>Hospital</label>
            <input  onChange={this.handleChange} type="text" name="hospital" value={this.state.dataForm.hospital}/>
            <br/>
            <label>File Number</label>
            <input  onChange={this.handleChange} type="text" name="fileNumber" value={this.state.dataForm.fileNumber}/>
            <br/>
            <label>MedicalReport</label>
            <input  onChange={this.handleChange} type="text" name="medicalReport" value={this.state.dataForm.medicalReport}/>
            <br/>
            <Link to="/home"><button type="submit">Create</button></Link>
        </form>
        </center>


            // <div> 
            //   <form>
            //       <label>Petient Name</label>
            //       <input type="text"/><br/>

            //       <label>Age</label>
            //       <input type="text"/><br/>

            //       <label>City</label>
            //       <input type="text"/><br/>

            //       <label>Image</label>
            //       <input type="text"/><br/>

            //       <label>hospital</label>
            //       <input type="text"/><br/>
                  
            //       <label>File Number</label>
            //       <input type="text"/><br/>

            //       <label>Medical Report</label>
            //       <input type="text"/> <br/>

            //       <button type="submit">Submit</button>
                  

            //   </form>
            // </div>
           

        
        )
    }
}
export default withRouter(Need)