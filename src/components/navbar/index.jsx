import React from "react";
import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="navbar_width">
        <p className="navbar_name">André Lusegardis</p>
        <div className="navbar_items">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Portfolio</a>
        </div>
      </div>
    </Container>
  );
};
