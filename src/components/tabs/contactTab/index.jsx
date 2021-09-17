import { Navbar } from "/src/components/navbar";
import { TitleUnderline } from "/src/components/titleUnderline";
import { Container } from "./styles";

export const ContactTab = () => {
  return (
    <Container>
      <div className="navbar_invisible">
        <Navbar />
      </div>
      <div className="contact_width">
        <TitleUnderline>Contact</TitleUnderline>
      </div>
    </Container>
  );
};
