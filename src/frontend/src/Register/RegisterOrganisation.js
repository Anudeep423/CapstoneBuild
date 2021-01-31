import React,{useState} from 'react'
import Home from "../home"
import {Link} from "react-router-dom"
import {signup} from "../CallingApi/patientapi"

function RegisterOrganisation(props) {
    const [values,setValues] = useState({name : "", email : "", password : "",passwordCheck : "",
    phone_no : "", regestration_no : "",role : "",org_head_addr : "",reddrsl_no : "",error : "",message : ""   
})
   const {name , email , password ,passwordCheck ,
   phone_no , regestration_no ,role ,org_head_addr ,reddrsl_no,error,message} = values

   const onsubmit = () => {
       signup({org_name : name, org_email : email, password, passwordCheck, org_phone_no : phone_no,
            reg_no : regestration_no, reg_role : role , org_head_addr : org_head_addr, reddrsl_no},props.location.pathname).then(data => {
                if(data.msg){
                    setValues({...values,error : data.msg,message:""})
                }else{
                    setValues({...values,error : "",message: data.message})
                }
            }).catch(err => console.log(err.message));
   }
   const onchange = (e) => {
       setValues({...values,[e.target.name] : e.target.value })
   }
   return (
       <div>
          <p>Register Organisation here</p> 

           <input name = "name" placeholder= "Organisation Name" value = {name} onChange = {onchange} />
           <br></br>
           <input name = "email" placeholder= "Organisation Email" value = {email} onChange = {onchange}/>
           <br></br>
           <input  name = "password" placeholder= "password" value = {password} onChange = {onchange}/>
           <br></br>
           <input name = "passwordCheck" placeholder= "confirm password" value = {passwordCheck} onChange = {onchange}/>
           <br></br>
           <input name = "phone_no" placeholder= "phone Number" value = {phone_no} onChange = {onchange} />
           <br></br>
           <input name = "regestration_no" placeholder= "Registration Number" value = {regestration_no} onChange = {onchange} />
           <br></br>
           <input name = "role" placeholder = "Role" value = {role} onChange = {onchange}/>
           <br></br>
           <input name = "org_head_addr" placeholder = "Organisation head address" value = {org_head_addr} onChange = {onchange} />
           <br></br>
           <input name = "reddrsl_no" placeholder = "reddrsl_no" value = {reddrsl_no} onChange = {onchange} />
           <button onClick = {onsubmit}>Submit</button>
          <Link to = "/"> <button>Home</button> </Link>
          {JSON.stringify(values)}
          {error ? <p>{error}</p> : ""}
            {message ? <p>{message}</p> : ""}
       </div>
   )
}

export default RegisterOrganisation
