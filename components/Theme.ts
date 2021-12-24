import styled from "styled-components";

export const H1 = styled.h1`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  color: #000000;

  @media screen and (max-width: 1500px) {
    font-size: 70px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 500px) {
    font-size: 26px;
  }
`;

export const H2 = styled.h2`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  color: #000000;

  @media screen and (max-width: 1300px) {
    font-size: 35px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

export const H3 = styled.h3`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  margin: 0px;

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const H5 = styled.h5`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const ButtonText = styled.span`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Body = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
