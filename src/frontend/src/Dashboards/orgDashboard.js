import React from 'react'
import {signout} from "../CallingApi/patientapi"

function orgDashboard({history}) {
    return (
        <div>
            <h1>This is organisation dashboard</h1>
            <button  onClick = { () => {signout( () => {history.push("/users/login")} )}  }>signout</button>
        </div>
    )
}

export default orgDashboard
