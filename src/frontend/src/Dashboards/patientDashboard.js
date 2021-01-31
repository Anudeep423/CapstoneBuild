import React from 'react'
import {signout} from "../CallingApi/patientapi"

const patientDashboard = ({history}) => {
    return (
        <div>
            <h1>This is patient Dashboard</h1>
            <button  onClick = { () => {signout( () => {history.push("/users/login")} )}  }>signout</button>
        </div>
    )
}

export default patientDashboard
