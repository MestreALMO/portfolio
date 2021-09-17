import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(var(--bg-900), var(--bg-800));
  background-size: 200% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-section);

  .contact_width {
    max-width: var(--max-width-app);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contact_email {
      font-size: var(--ft-400);
      margin-bottom: 2rem;
    }

    .contact_info {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .contact_info_block {
        margin-bottom: 0.6rem;
        max-width: 7rem;
        width: 100%;
        border: solid var(--white) 0.01rem;
        border-radius: 1rem;
        box-shadow: 0 0 1.4rem var(--white);
        transition: transform 0.5s;

        &:hover {
          transform: scale(1.1);
        }

        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0.6rem;
          font-size: var(--ft-400);

          svg {
            font-size: var(--ft-600);
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
`;
