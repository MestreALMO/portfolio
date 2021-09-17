import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .navbar_visible {
    position: fixed;
    z-index: 999;
    width: 100%;
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.94;
    }
  }

  .navbar_invisible {
    opacity: 0;
    width: 100%;
  }

  .contact {
    width: 100%;
    background: linear-gradient(var(--bg-900), var(--bg-800));
    background-size: 200% 200%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--padding-section);

    .about_width {
      max-width: var(--max-width-app);
    }
  }

  .footer {
    width: 100%;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
