import { GrLinkedin, GrGithub, GrYoutube, GrTwitter } from "react-icons/gr";
import { FaCodepen } from "react-icons/fa";

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

        <a className="contact_email" href="mailto:lusegardis@gmail.com">
          Email: lusegardis@gmail.com
        </a>

        <div className="contact_info">
          <div className="contact_info_block">
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-lusegardis/detail/recent-activity/shares/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="contact_info_block">
            <a
              href="https://github.com/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub />
              <p>GitHub</p>
            </a>
          </div>
          <div className="contact_info_block">
            <a
              href="https://www.youtube.com/channel/UCoxaVAl8-XHPv__s48HMPZA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrYoutube />
              <p>YouTube</p>
            </a>
          </div>
          <div className="contact_info_block">
            <a
              href="https://twitter.com/Lusegardis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrTwitter />
              <p>Twitter</p>
            </a>
          </div>
          <div className="contact_info_block">
            <a
              href="https://codepen.io/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCodepen />
              <p>Codepen</p>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
