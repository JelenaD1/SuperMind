import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Logo from "./Logo"
import NavBar from "./NavBar"
import ToDoList from "./ToDoList"
import FitnessTracker from "./FitnessTracker"
import VeganLife from "./VeganLife"
import SignInForm from "./SignInForm"
import SignOut from "./SignOut"
import fire from "./fire"

export const PrivateRoutes = ({ onLogOut }) => (
  <>
    <Route path="/fitness">
      <FitnessTracker />
    </Route>
    <Route path="/veganlife">
      <VeganLife />
    </Route>
    <Route path="/todolist">
      <ToDoList />
    </Route>
    <Route path="/logout">
      <SignOut handleLogOut={onLogOut} />
    </Route>
  </>
)

const App = () => {
  const [page, setPage] = useState("/")
  const [user, setUser] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState(false)
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  })

  console.log(page)
  console.log(user)

  const clearInputs = () => {
    setSignInForm({})
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const handleLogIn = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(signInForm.email, signInForm.password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break
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
      .createUserWithEmailAndPassword(signInForm.email, signInForm.password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)
            break
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
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  const handleSignInFormChange = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
      <Route exact path="/">
          <Logo />
        </Route>
        {user && (<PrivateRoutes onLogOut={handleLogOut} />)}
        {!user && (
          <Route path="/signin">
            <SignInForm
                value={signInForm}
                onChange={handleSignInFormChange}
                onLogIn={handleLogIn}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />
          </Route>
        )}
      </Switch>
    </div>

  )
}

export default App
