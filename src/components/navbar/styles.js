import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(var(--bg-900), var(--bg-700));
  color: var(--white);
  padding: 0.2rem;

  .navbar_width {
    width: 100%;
    max-width: var(--max-width-app);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar_name {
      cursor: default;
      font-size: var(--ft-400);
    }

    .navbar_items {
      display: flex;

      a {
        height: 100%;
        padding: 0.8rem;
        cursor: pointer;
        border-radius: 1rem;
        transition: background 0.2s;
        font-size: var(--ft-400);

        &:hover {
          background: var(--bg-800);
        }
      }
    }
  }
`;
