import React from "react";

const Nav = props => (

  <nav className="navbar navbar-light bg-light"> 
  <span className="navbar-brand">Clicky Game</span>
    <div className="navbar-nav">
      <span className="nav-item">Click an image to begin</span>
      <span className="nav-item">Score: {props.count} | Top Score: {props.score}</span>
    </div>
  </nav>
);

export default Nav;