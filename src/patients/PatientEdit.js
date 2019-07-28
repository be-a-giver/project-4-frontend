import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';


class PatientEdit extends Component{
    state={
        dataForm:{
            "patientName": '',
            "age" : '',
            "city" :'',
            "image" :'',
            "hospital" : '',
            "fileNumber" : '',
            "medicalReport" :''
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const patientId = this.props.match.params.id;
        show(user,patientId)
        .then((response) => {
            const patient = response.data.patient
            this.setState({
                dataForm: patient
            })
        })
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props)
        const user = this.props.user;
        const patientId = this.props.match.params.id;
        const updatePatient = this.state.dataForm;
        update(user,updatePatient,patientId)
        .then(() => this.props.history.push(`/patients`))
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
        <label>MedicalReport</label>
        <input  onChange={this.handleChange} type="text" name="medicalReport" value={this.state.dataForm.medicalReport}/>
        <br/>
        <button type='submit'>Update</button>
        
    </form>
    </center>
        )
    }
}



export default withRouter(PatientEdit)