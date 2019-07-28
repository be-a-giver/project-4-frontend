import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
// import {Link} from 'react-router-dom'


class PatientCreate extends Component {
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
        .then(() => this.props.history.push('/myProfile'))
        // .then(() => alert('created'))
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
            <input  onChange={this.handleChange} type="number" name="age" value={this.state.dataForm.age}/>
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
            <input  onChange={this.handleChange} type="number" name="fileNumber" value={this.state.dataForm.fileNumber}/>
            <br/>
            <label>Medical Report</label>
            <input  onChange={this.handleChange} type="text" name="medicalReport" value={this.state.dataForm.medicalReport}/>
            <br/>
            <button type="submit">Create</button>
            {/* <Link to="/home"><button type="submit">Create</button></Link> */}
        </form>
        </center>

        
        )
    }
}
export default withRouter(PatientCreate)