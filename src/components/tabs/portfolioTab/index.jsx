import { useMemo } from "react";
import Image from "next/image";

import { Container } from "./styles";
import { Navbar } from "/src/components/navbar";
import { TitleUnderline } from "/src/components/titleUnderline";
import * as Projects from "./projects";

export const PortfolioTab = () => {
  const automaticHtml = useMemo(() => {
    return Projects.projects.map((item) => (
      <a
        key={item}
        href={`https://github.com/MestreALMO/` + item}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio_element"
      >
        <figure>
          <Image
            src={
              `${Projects.githubLink}` +
              `${item}` +
              "/blob/main/_README.md/img01.png?raw=true"
            }
            alt={item}
            width="1919"
            height="1079"
          />
          <figcaption>{item}</figcaption>
        </figure>
      </a>
    ));
  }, []);

  return (
    <>
      <Container>
        <div className="navbar_invisible">
          <Navbar />
        </div>
        <TitleUnderline>Portfolio</TitleUnderline>
        <div className="portfolio_width">
          {/* <InfiniteScroll
            dataLength={posts.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
          > */}
          {automaticHtml}
          {/* </InfiniteScroll> */}
        </div>
      </Container>
    </>
  );
};
