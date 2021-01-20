import React from "react";
import {Link,Route,BrowserRouter as Router,WithRouter,Switch} from "react-router-dom"
import RegisterUser from "./Register/RegisterUser"
import RegisterDoctor from "./Register/RegisterDoctor"
import RegisterOrganisation from "./Register/RegisterOrganisation"
import Home from "./home"
function App() {
  return (
    
   <Router>
       <Switch>
       <Route  exact path ="/" component = {Home} />
  <Route exact  path = "/registerUser" component = {RegisterUser}/>
  <Route exact path = "/registerDoctor" component = {RegisterDoctor}/>
  <Route exact path = "/registerOrganisation" component = {RegisterOrganisation}/>
  </Switch>


  </Router>
  );
}

export default App;
