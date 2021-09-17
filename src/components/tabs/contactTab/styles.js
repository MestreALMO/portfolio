import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(var(--bg-900), var(--bg-700));
  background-size: 200% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-section);

  .contact_width {
    max-width: var(--max-width-app);
  }
`;
