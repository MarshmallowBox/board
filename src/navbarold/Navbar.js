import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <a href="#">
        <h1>Brand</h1>
      </a>

      <nav>
        <span>Menu1</span>
        <span>Menu2</span>
        <span>Menu3</span>
      </nav>
    </header>
  );
};

export default Navbar;
