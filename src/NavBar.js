import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLnk } from "./NavbarElements"

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
                 <NavLink to="/todolist" activeStyle>
                     To Do List
                 </NavLink>
                 <NavLink to="/fitness" activeStyle>
                     Fitness Tracker
                 </NavLink>
                 <NavLink to="/veganlife" activeStyle>
                     Vegan Life
                 </NavLink>
             </NavMenu>
             <NavBtn>
                <NavBtnLnk to="/signin">Sign In</NavBtnLnk>
                </NavBtn>
         </Nav>
        </>
    )
    

}

export default NavBar


