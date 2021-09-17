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

  .about_width {
    max-width: var(--max-width-app);

    p {
      text-indent: 4rem;
      font-size: var(--ft-400);
    }
  }
`;
