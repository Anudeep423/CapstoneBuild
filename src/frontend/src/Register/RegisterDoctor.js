import React,{useState} from 'react'
import Home from "../home"
import {Link} from "react-router-dom"
import {signup} from "../CallingApi/patientapi"

const RegisterDoctor = (props) => {
    
    console.log(props)
    const [values,setValues] = useState({Name : "",Email  : "",password : "",Enter_password_again : "",PhoneNumber : "",
      Degree : "",specialisation : "",type_work : "",address : "",error : "",message : ""})

      const {Name,Email,password,Enter_password_again,PhoneNumber,Degree,specialisation,type_work,address,error,message} = values
    const onChange = (e) => {
        setValues({...values,[e.target.name] : e.target.value  })
    } 
        
    const onSubmit = () => {
        signup({doctor_name : Name , doctor_email : Email, password : password,
             passwordCheck : Enter_password_again, doctor_phone_no : PhoneNumber, degree : Degree,
              specialisation : specialisation , type_work,address},props.location.pathname).then(data => {
                if(data.msg){
                    setValues({...values,error : data.msg,message:""})
                }else{
                    setValues({...values,error : "",message: data.message})
                }
            }).catch(err => console.log(err.message));
    }


    console.log(props)
    return (
        <div>
            <p>Register doctor here</p>
            <input placeholder="Name"  name="Name" value = {Name} onChange = {onChange}/>
            <br></br>
            <input placeholder="Email"  name="Email" value = {Email} onChange = {onChange}/>
            <br></br>
            <input placeholder="password" name ="password" value={password} onChange = {onChange}/>
            <br></br>
            <input placeholder="Enter password again" name = "Enter_password_again" value={Enter_password_again} onChange = {onChange}/>
            <br></br>
            <input placeholder="PhoneNumber"  name = "PhoneNumber" value = {PhoneNumber} onChange = {onChange} />
            <br></br>
            <input placeholder="Degree" name = "Degree" value = {Degree} onChange = {onChange}/>
            <br></br>
            <input placeholder="specialisation" name ="specialisation" value ={specialisation} onChange = {onChange}/>
            <br></br>
            <input placeholder="type_work" name = "type_work" value ={type_work} onChange = {onChange}/>
            <br></br>
            <input placeholder="address" name = "address"  value ={address} onChange = {onChange}/>
            <br></br>
            <button onClick = {onSubmit} >Submit</button>
                {JSON.stringify(values)}            
                {error ? <p>{error}</p> : ""}
            {message ? <p>{message}</p> : ""}
            <Link to = "/"> <button>Home</button> </Link>
        
            
        </div>
    )
}

export default RegisterDoctor
