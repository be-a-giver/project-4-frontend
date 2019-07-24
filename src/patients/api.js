import apiUrl from '../apiConfig';
import axios from 'axios'


export const index = (user) => {
    return  axios({
        method:'GET',
        url: apiUrl + '/patients',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}
 

export const destroy = (user,patientId) => {
    return axios({
        method:"DELETE",
        url:apiUrl + `/patients/${patientId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}




export const create = (user,newPatient) => {
    return axios({
        method:'POST',
        url:apiUrl + '/patients',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            patient:newPatient
        }
    })
}


export const show = (user, patientId) => {
    return axios({
        method:'GET',
        url: apiUrl + `/patients/${patientId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}






