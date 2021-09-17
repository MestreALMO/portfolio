import { Navbar } from "/src/components/navbar";
import { TitleUnderline } from "/src/components/titleUnderline";
import { Container } from "/src/styles/Home";
import { AboutTab } from "/src/components/tabs/aboutTab";
import { HomeTab } from "/src/components/tabs/homeTab";
import { ContactTab } from "/src/components/tabs/contactTab";

const Home = () => {
  return (
    <Container>
      <div className="navbar_visible">
        <Navbar />
      </div>
      <div className="navbar_invisible">
        <Navbar />
      </div>

      <HomeTab />

      <AboutTab />

      <ContactTab />

      <footer className="footer">
        © André Lusegardis Miranda de Oliveira 2021
      </footer>
    </Container>
  );
};

export default Home;
