import {API} from "../Backend"
//signup route
// fixing bugs
export const signup = (pats,path) =>{
    console.log(pats);
    //console.log(JSON.stringify(pats));
    return fetch(`${API}${path}`, {
        method : "POST",
        body: JSON.stringify(pats),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).catch(err => console.log(err.message));
}

//signin route
// doctor api
//fixing bugs
export const signin = (pats,path) =>{
    console.log(pats);
    //console.log(JSON.stringify(pats));
    return fetch(`${API}${path}`, {
        method : "POST",
        body: JSON.stringify(pats),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()).catch(err => console.log(err.message));
}
// authenticate route 
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
// is autheticated route 

  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };

  export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
    }
  };

// adding patient details
  export const pat_dets = (pats) =>{
  let t = {}
    t = JSON.parse(localStorage.getItem("jwt"))
    console.log(t.token)
    console.log(pats);
    console.log(JSON.stringify(pats));
    return fetch(`http://localhost:8000/catalog/patients/create`, {
        method : "POST",       
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Basic ${t.token}`
        },body: JSON.stringify(pats),
    }).then(res => res.json()).catch(err => console.log(err.message));
}
// get patinet details
export const getPatDetails = (id) => {

  return fetch(`http://localhost:8000/catalog/patients/${id}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const updatePatDetails = (body,id) => {
  return fetch(`http://localhost:8000/catalog/patients/${id}/update`, {
        method : "PUT",       
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },body: JSON.stringify(body),
    }).then(res => res.json()).catch(err => console.log(err.message));
}
// get patient details route 
export const getAllPatientDetails = () => {
  return fetch(`http://localhost:8000/catalog/patients`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const uploadPatientReport = (file) => {
  console.log(JSON.stringify(file))
  return fetch("http://localhost:8000/catalog/doctors/uploadReport" , {
    method : "POST",
    headers : {
      Accept : "multipart/form-data",
      "Content-Type" : "multipart/form-data",
    },
    body  : JSON.stringify(file),
  }  ).then(res => res.json()).catch(err => {console.log(err)})
  
}

// export const uploadPrescription = (data) => {
//   console.log(JSON.stringify(file))
//   return fetch("http://localhost:8000/catalog/doctors/uploadReport" , {
//     method : "POST",
//     headers : {
//       Accept : "application/json",
//       "Content-Type" : "application/json",
//     },
//     body  : JSON.stringify(file),
//   }  ).then(res => res.json()).catch(err => {console.log(err)})
  
// }


export const addPrescription = (data) => {
  console.log(data)
 return fetch("http://localhost:8000/catalog/patients/prescriptions/create" , {
  method : "POST",
    headers : {
      Accept : "application/json",
      "Content-Type" : "application/json"
    },body : JSON.stringify(data),
  }).then(res => res.json()).catch(err => {console.log(err.message)})

}
// doctor routes
export const getPres = (id) => {
  return fetch(`http://localhost:8000/catalog/patient/${id}/pres`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

export const addGraphValues = (data) => {
  console.log(data)
 return fetch("http://localhost:8000/catalog/doctor/create/graph" , {
  method : "POST",
    headers : {
      Accept : "application/json",
      "Content-Type" : "application/json"
    },body : JSON.stringify(data),
  }).then(res => res.json()).catch(err => {console.log(err.message)})

}

export const getPatGraph = (id) => {
return  fetch(`http://localhost:8000/catalog/patient/${id}/graphvalues`, {
  method: "GET"
})
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}