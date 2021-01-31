import {API} from "../Backend"

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

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };

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