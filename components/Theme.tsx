import styled from "styled-components";

export const H1 = styled.h1`
  font-family: Fira Sans, Roboto, sans-serif;
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

  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 26px;
  }
`;

export const H2 = styled.h2`
  font-family: Fira Sans, Roboto, sans-serif;
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

  @media screen and (max-width: 300px) {
    font-size: 18px;
  }
`;

export const H3 = styled.h3`
  font-family: Fira Sans, Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-family: Fira Sans, Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  margin: 0px;

  @media screen and (max-width: 1700px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1500px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const H5 = styled.h5`
  font-family: Fira Sans, Roboto, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;

  @media screen and (max-width: 1500px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ButtonText = styled.span`
  font-family: Fira Sans, Roboto, sans-serif;
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
  font-family: Fira Sans, Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const Loading: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <svg
        version="1.1"
        id="L9"
        x="0px"
        y="0px"
        width="200"
        height="200"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
      >
        <path
          fill={color ? color : "#fff"}
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
