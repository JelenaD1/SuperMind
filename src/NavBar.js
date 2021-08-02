import React from "react"
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"
// NavBtn, NavBtnLnk }

import superman from "./superman.jpeg"

const NavBar = () => {
  return (
        <>
         <Nav>
             <NavLink to="/">
                <img src={superman} alt="logo" width="50" height="50"/>
             </NavLink>
             <Bars />
             <NavMenu>
                 <NavLink to="/todolist" >
                     To Do List
                 </NavLink>
                 <NavLink to="/fitness" >
                     Fitness Tracker
                 </NavLink>
                 <NavLink to="/veganlife" >
                     Vegan Life
                 </NavLink>
                 <NavLink to="/logout" >
                     Log Out
                 </NavLink>
                 <NavLink to="/signin" >
                     Sign In
                 </NavLink>
             </NavMenu>
             {/* <NavBtn>
                <NavBtnLnk to="/signin">Sign In</NavBtnLnk>
                </NavBtn> */}
         </Nav>
        </>
  )
}

export default NavBar
