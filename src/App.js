import React, {useState} from "react"
import { Switch, Route } from "react-router-dom"
import Logo from "./Logo"
import NavBar from "./NavBar"

import ToDoList from "./ToDoList"
import FitnessTracker from "./FitnessTracker"
import VeganLife from "./VeganLife"
import SignIn from './SignIn'

 const App = () => {
     
  const [page, setPage] = useState("/")

  

 


   

    return (

         <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/fitness">
                    <FitnessTracker />
                </Route>
                <Route path="/veganlife">
                    <VeganLife />
                </Route>
                <Route path="/todolist">
                    <ToDoList />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/">
                    <Logo />
                </Route>
            </Switch>
        </div>
         

        

    )


}

export default App;
