import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(var(--bg-800), var(--bg-900));
  background-size: 200% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-section);

  .portfolio_width {
    display: grid;
    grid-gap: 1.4rem;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    max-width: var(--max-width-app);

    @media screen and (max-width: 780px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .portfolio_element {
      border: var(--white) solid;
      border-radius: 1rem;
      transition: transform 0.5s;
      max-width: 36rem;
      min-width: 10rem;

      &:hover {
        transform: scale(1.06);
      }

      figure {
        img {
          border-radius: 1rem;
        }
        figcaption {
          font-size: var(--ft-400);
          text-align: center;
        }
      }
    }
  }
`;
