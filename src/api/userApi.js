import {API} from '../config'

export const userRegister = (username,email,password)=>{
    let user = {username,email,password}
    
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{return response.json()})
    .catch(error=>console.log(error))
}