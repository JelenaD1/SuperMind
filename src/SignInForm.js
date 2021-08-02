import React from "react"

const SignInForm = (props) => {
  const {
    value,
    onChange,
    onLogIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props

  return (
       <section className="login">
           <div className="login-container">
               <label>Username</label>
               <input type="text" name="email" autoFocus required value={value.email} onChange={onChange} />
               <p className="errorMsg">{emailError}</p>
               <label>Password</label>
               <input type="password" name="password" required value={value.password} onChange={onChange} />
               <p className="errorMsg">{passwordError}</p>
               <div className="btnContainer">
                  {hasAccount
                    ? (
                      <>
                      <button onClick={onLogIn}>Sign In</button>
                      <p>
                          {"Don't have an account ?"}
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

export default SignInForm
