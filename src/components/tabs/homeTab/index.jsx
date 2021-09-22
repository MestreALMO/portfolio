import Image from "next/image";

import { Navbar } from "/src/components/navbar";
import { Container } from "./styles";

export const HomeTab = () => {
  return (
    <Container>
      <div className="navbar_invisible">
        <Navbar />
      </div>
      <div className="homeTab_width">
        <div className="homeTab_image">
          <Image
            src="/my-photo.jpeg"
            alt="my_photo"
            width="899"
            height="1599"
          />
        </div>
        <div className="homeTab_text">
          <h1>Welcome!</h1>
          <p>I'm André Lusegardis Miranda de Oliveira,</p>
          <p>it's a pleasure to have you here.</p>
        </div>
      </div>
    </Container>
  );
};
