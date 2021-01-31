import React,{useState} from 'react'
import Home from "../home"
import {Link} from "react-router-dom"
import {signup} from "../CallingApi/patientapi"

const RegisterUser = (props) => {

    console.log(props);

const [values,SetValues] = useState({name : "",email : "",password : "", passwordCheck: "",phone_no :"",error : "",message : ""});

        const {name, email, password, passwordCheck, phone_no,error,message} = values;

        const patient_name = name;
        const patient_email = email;
        const patient_phone_no = phone_no;

        const handleChange = (e)  => {
            const store = e.target.name
            SetValues({...values, [store] : e.target.value } )
        }

        const onSubmit = (e) => {
            e.preventDefault();
            signup({patient_name, patient_email, password, passwordCheck, patient_phone_no},props.location.pathname).then(data => {
                    if(data.msg){
                        SetValues({...values,error : data.msg,message:""})
                    }else{
                        SetValues({...values,error : "",message: data.message})
                    }
                }).catch(err => console.log(err.message));
        }

    return (
        <div>
            <p>Register User here</p>
            
            <input required placeholder="Enter Name" name = "name" onChange = {handleChange} value={name}/>
            <br />
            <input required placeholder="Enter Email" name ="email" onChange = {handleChange} value = {email}/>
            <br />
            <input required placeholder="Enter Password" name = "password" onChange = {handleChange} value = {password} />
            <br />
            <input required placeholder="Re-Enter Password" name = "passwordCheck" onChange = {handleChange} value = {passwordCheck}/>
            <br />
            <input  required placeholder="Enter Phone Number"  name  =  "phone_no" onChange = {handleChange} value = {phone_no}/>
            <br />
            <button onClick = {onSubmit}>Submit</button>
            {error ? <p>{error}</p> : ""}
            {message ? <p>{message}</p> : ""}            
           <Link to = "/"> <button>Home</button> </Link>

           {JSON.stringify(values)}
        </div>
    )
}

export default RegisterUser
