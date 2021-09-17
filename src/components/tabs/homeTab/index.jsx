import { Container } from "./styles";
import Image from "next/image";

export const HomeTab = () => {
  return (
    <Container>
      <div className="homeTab_image">
        <Image src="/my-photo.jpeg" alt="my_photo" width="864" height="1152" />
      </div>
      <div className="homeTab_text">
        <h1>Welcome!</h1>
        <p>I'm André Lusegardis Miranda de Oliveira,</p>
        <p>it's a pleasure to have you here.</p>
      </div>
    </Container>
  );
};
