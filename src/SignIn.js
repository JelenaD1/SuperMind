import React from "react"

const SignIn = ({ email, setEmail, password, setPassword, handleLogIn, handleSignUp, hasAccount, setHasAccount, emailError, passwordError }) => {
  return (
       <section className="login">
           <div className="login-container">
               <label>Username</label>
               <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
               <p className="errorMsg">{emailError}</p>
               <label>{passwordError}</label>
               <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
               <p className="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                  {hasAccount
                    ? (
                      <>
                      <button onClick={handleLogIn}>Sign In</button>
                      <p>
                          Don't have an account ?
                          <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                      </>
                      )
                    : (
                      <>
                      <button onClick={handleSignUp}>Sign Up</button>
                      <p>
                          Have an account ?
                          <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                      </>

                      )}
               </div>

           </div>

       </section>
  )
}

export default SignIn
