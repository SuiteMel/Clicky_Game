import React from "react";

const Nav = props => (

  <nav className="navbar"> 
    <ul>
      <li className="brand">Clicky Game</li>
      <li>Click an image to begin</li>
      <li>Score: {props.count} | Top Score: {props.score}</li>
    </ul>
  </nav>
);

export default Nav;