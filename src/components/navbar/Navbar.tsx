import React from "react";
import FilterOptions from "./FilterOptions";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar--background" src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="background"/>
      <FilterOptions />
    </nav>
  );
};

export default Navbar;
