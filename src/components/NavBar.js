import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div class= "navbar">
   <NavLink
    to = "/"
    exact
    activeStyle={{backgroung: "darkblue"}}>
      Home
  </NavLink>
  <NavLink
    to = "/movies"
    exact
    activeStyle={{backgroung: "darkblue"}}>
      Movies
  </NavLink>
  <NavLink
    to = "/directors"
    exact
    activeStyle={{backgroung: "darkblue"}}>
      Directors
  </NavLink>
  <NavLink
    to = "/actors"
    exact
    activeStyle={{backgroung: "darkblue"}}>
      Actors
  </NavLink>
  </div>;
}

export default NavBar;
