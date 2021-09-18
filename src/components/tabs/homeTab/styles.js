import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .homeTab_width {
    background: url("/bgHomeBlured.png") no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--padding-section);

    .homeTab_image {
      max-width: 20rem;
      padding: 0 1rem;

      img {
        border-radius: 50%;
      }
    }

    .homeTab_text {
      margin-top: 1rem;
      text-align: center;
      color: var(--white);

      h1 {
        font-size: var(--ft-600);
      }
      p {
        font-size: var(--ft-400);
      }
    }
  }
`;
