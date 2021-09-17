import styled from "styled-components";

export const Container = styled.h1`
  font-size: var(--ft-600);
  text-align: center;

  &:after {
    content: "";
    width: 40%;
    height: 0.2rem;
    background: #c82333;
    display: block;
    margin: 0.4rem auto;
    transition: width 0.2s ease-in-out, color 0.2s;
    margin-bottom: 2.4rem;
  }

  &:hover:after {
    width: 70%;
  }
`;
