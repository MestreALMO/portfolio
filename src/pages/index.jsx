import { Navbar } from "/src/components/navbar";
import { Container } from "/src/styles/Home";
import { AboutTab } from "/src/components/tabs/aboutTab";
import { HomeTab } from "/src/components/tabs/homeTab";
import { ContactTab } from "/src/components/tabs/contactTab";
import { PortfolioTab } from "/src/components/tabs/portfolioTab";

const Home = () => {
  return (
    <Container>
      <div className="navbar_visible">
        <Navbar />
      </div>

      <HomeTab id="homeTab" />

      <section id="aboutTab">
        <AboutTab />
      </section>

      <section id="contactTab">
        <ContactTab />
      </section>

      <section id="portfolioTab">
        <PortfolioTab />
      </section>

      <footer className="footer">
        © André Lusegardis Miranda de Oliveira 2021
      </footer>
    </Container>
  );
};

export default Home;
