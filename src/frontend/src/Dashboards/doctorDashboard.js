import React from 'react'
import {signout} from "../CallingApi/patientapi"

function doctorDashboard({history}) {
    return (
        <div>
            <h1>This is doctor dashboard</h1>
            <button  onClick = { () => {signout( () => {history.push("/users/login")} )}  }>signout</button>
        </div>
    )
}

export default doctorDashboard
