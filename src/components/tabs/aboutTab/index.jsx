import { Navbar } from "/src/components/navbar";
import { TitleUnderline } from "/src/components/titleUnderline";
import { Container } from "./styles";

export const AboutTab = () => {
  return (
    <Container>
      <div className="navbar_invisible">
        <Navbar />
      </div>
      <div className="about_width">
        <TitleUnderline>About</TitleUnderline>
        <p>
          I'm a developer with focus on the front-end, my speciality being web
          development, the coding I'm use to work with are: NextJS, ReactJS,
          TypeScript, JavaScript, HTML, CSS, PHP.
        </p>
        <p>
          Since I was a kid I always dreamed about being a developer, making my
          owns softwares. As the years gonne by, with me putting a lot of effort
          and time to make my dreams come true, I made it true.
        </p>
        <p>
          Today here I am with my diploma (Bachelor's degrees in information
          systems), lot's of systems developed and this site of my making. This
          site was made with ReactJS.
        </p>
        <p>
          Among my main hobbies are: Developing; Watching series, animes,
          youtube; gaming on PC and consoles; reading romances.
        </p>
      </div>
    </Container>
  );
};
