import React from "react";

const Nav = props => (

  <nav className="navbar"> 
    <ul>
      <li className="brand">Clicky Game</li>
      <li>Click an image to begin</li>
      <li>Score: {props.count} | Top Score: </li>
      <button onClick={props.handleIncrement}>Click</button>
    </ul>
  </nav>
);

export default Nav;