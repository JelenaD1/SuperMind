import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import Logo from "./Logo"
import NavBar from "./NavBar"
import ToDoList from "./ToDoList"
import FitnessTracker from "./FitnessTracker"
import VeganLife from "./VeganLife"
import SignIn from './SignIn'
import fire from "./fire"

 const App = () => {
     
  const [page, setPage] = useState("/")
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState(false)

  const clearInputs = () => {
      setEmail("")
      setPassword("")
  }

  const clearErrors = () => {
      setEmailError("")
      setPasswordError("")
  }

  const handleLogIn = () => {
      clearErrors()
      fire
       .auth()
       .signInWithEmailAndPassword(email, password)
       .catch(err => {
           switch(err.code) {
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                 setEmailError(err.message)
                 break;
                case "auth/wrong-password":
                 setPasswordError(err.message)
                 break
           }
            
       })

  }

  const handleSignUp = () => {
      clearErrors()

    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
        switch(err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message)
              break;
             case "auth/weak-password":
              setPasswordError(err.message)
              break
        }
         
    })

  }


  const handleLogOut = () => {
      fire.auth().signOut()
  }

  const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
          if(user) {
              clearInputs()
              setUser(user)
          }else {
              setUser("")
          }
      })
  }

  useEffect(() => {
      authListener()

  },[])

  

 


   

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
                    <SignIn 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassowrd={setPassword}
                    handleLogIn={handleLogIn}
                    handleSignUp={handleSignUp}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError} 
                    />
                </Route>
                <Route exact path="/">
                    <Logo />
                </Route>
            </Switch>
        </div>
         

        

    )


}

export default App;
