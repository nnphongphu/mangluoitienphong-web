import styled from "styled-components";

export const Footer = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  height: 623px;
  background-color: var(--color-dark-red);
  overflow: hidden;
`;
