import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(var(--bg-900), var(--bg-700));
  color: var(--white);

  .navbar_width {
    width: 100%;
    max-width: var(--max-width-app);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
      justify-content: center;

      .navbar_name {
        display: none;
      }
    }

    .navbar_name {
      cursor: default;
      font-size: var(--ft-400);
      margin: 0 1rem;
    }

    .navbar_items {
      display: flex;

      a {
        height: 100%;
        padding: 0.8rem;
        cursor: pointer;
        transition: background 0.2s;
        font-size: var(--ft-400);

        &:hover {
          background: var(--bg-700);
        }
      }
    }
  }
`;
