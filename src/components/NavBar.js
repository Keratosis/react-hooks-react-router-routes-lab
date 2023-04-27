import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
  <div className="navbar"> 
<NavLink exact to ="/">
 Home
</NavLink>{" "}
<NavLink to="/movies">
  Movies</NavLink>{" "}
 <NavLink to="/actors">
  Actors</NavLink>{" "}
<NavLink to="/directors">
Directors</NavLink>

  </div>
  
  </div>;
}

export default NavBar;
