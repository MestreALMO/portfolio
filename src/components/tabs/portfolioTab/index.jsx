import { Container } from "./styles";
import { Navbar } from "/src/components/navbar";
import { TitleUnderline } from "/src/components/titleUnderline";

export const PortfolioTab = () => {
  return (
    <>
      <Container>
        <div className="navbar_invisible">
          <Navbar />
        </div>
        <TitleUnderline>Portfolio</TitleUnderline>
        <div className="about_width"></div>
      </Container>
    </>
  );
};
