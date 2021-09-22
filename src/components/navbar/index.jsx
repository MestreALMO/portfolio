import { Link } from "react-scroll";

import React from "react";
import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="navbar_width">
        <p className="navbar_name">André Lusegardis</p>
        <div className="navbar_items">
          <Link
            activeClass="active"
            to="homeTab"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="aboutTab"
            spy
            smooth
            offset={0}
            duration={500}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="contactTab"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Contact
          </Link>

          <Link
            activeClass="active"
            to="portfolioTab"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </Container>
  );
};
