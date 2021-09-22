import Link from "next/link";

import React from "react";
import { Container } from "./styles";

export const Navbar = () => {
  return (
    <Container>
      <div className="navbar_width">
        <p className="navbar_name">André Lusegardis</p>
        <div className="navbar_items">
          <Link href="/?">Home</Link>

          <Link href="/#aboutTab">About</Link>

          <Link href="/#contactTab">Contact</Link>

          <Link href="/#portfolioTab">Portfolio</Link>
        </div>
      </div>
    </Container>
  );
};
