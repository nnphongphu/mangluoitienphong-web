import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <NavBar />
      <LandingSection />
      <IntroductionSection />
      <IdentitySection />
      <ActivitySection />
    </>
  );
}

const IdentityWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 860px;
  display: flex;
  justify-content: space-between;
  padding: 130px 130px 0px 130px;
  background-color: #f6a320;
  background-image: url("/map.png");
  background-repeat: no-repeat;
  background-position: top right;
`;

const IdentityContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 50vw;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const SquareButton = styled.div<{ color: string }>`
  width: 315px;
  height: 170px;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 40px;
`;

const IdentitySection = () => {
  return (
    <IdentityWrapper>
      <IdentityContent>
        <H2 style={{ textAlign: "left" }}>Mạng lưới Tiên Phong là gì?</H2>
        <H4 style={{ color: "white", textAlign: "left" }}>
          1. Lorem ipsum dolor
        </H4>
        <B style={{ textAlign: "left", width: "35vw" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
        <H4 style={{ color: "white", textAlign: "left" }}>
          2. Lorem ipsum dolor sit amet
        </H4>
        <B style={{ textAlign: "left", width: "35vw" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
        <ButtonWrapper>
          <SquareButton color="#C82127">Đọc thêm về Tiên Phong</SquareButton>
          <SquareButton color="#EE5A2A">
            Xem sản phẩm của chúng tôi
          </SquareButton>
        </ButtonWrapper>
      </IdentityContent>
      <IdentityStickers>
        <Sticker>
          Mạng lưới kết nối X người đến từ X tỉnh, thành phố khắp Việt Nam
        </Sticker>
        <Sticker>Có X dân tộc đã tham gia vào Mạng lưới Tiên Phong</Sticker>
      </IdentityStickers>
    </IdentityWrapper>
  );
};

const IdentityStickers = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  row-gap: 50px;
`;

const Sticker = styled.div`
  width: 407px;
  height: 178px;
  background: #ffffff;
  border-radius: 0px 30px;
  color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  padding: 30px;
`;

const ActivityWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  padding: 30px 130px 30px 130px;
  row-gap: 30px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background-color: #c82127;
  color: white;
  cursor: pointer;
  width: fit-content;
  align-self: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;
`;

const ImageCard = styled.div<{ src: string }>`
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;

  padding: 0 30px 30px 30px;
  display: flex;
  align-items: flex-end;
`;

const ActivitySection = () => {
  return (
    <ActivityWrapper>
      <H2>Các hoạt động của Mạng lưới Tiên Phong</H2>
      <ImageWrapper>
        <ImageCard src="/activity.png">Lorem ipsum dolor sit amet</ImageCard>
        <ImageCard src="/activity.png">Lorem ipsum dolor sit amet</ImageCard>
        <ImageCard src="/activity.png">Lorem ipsum dolor sit amet</ImageCard>
      </ImageWrapper>
      <Button> Xem thêm </Button>
    </ActivityWrapper>
  );
};

const IntroductionWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 422px;
  background-color: #c82127;
  padding: 0 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
`;

const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;

const B = styled.b`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

const ReverseTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-top: 130px solid white;
  align-self: flex-start;
`;

const IntroductionSection = () => {
  return (
    <IntroductionWrapper>
      <Column>
        <H2>Câu chuyện</H2>
        <B>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Mauris elementum ex ac enim luctus scelerisque. Etiam ac
          congue risus.
        </B>
      </Column>
      <ReverseTriangle />
      <Column>
        <H2>Sứ mệnh</H2>
        <B>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Mauris elementum ex ac enim luctus scelerisque. Etiam ac
          congue risus.
        </B>
      </Column>
    </IntroductionWrapper>
  );
};

const LandingSection = () => {
  return (
    <LandingWrapper>
      <H1>
        mạng lưới <br /> tiên phong
      </H1>
      <H4>vì tiếng nói của người dân tộc thiểu số</H4>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - 138px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const H1 = styled.h1`
  font-size: 20vh;
  color: #c82127;
  text-align: center;
  font-weight: bolder;
  margin: 0;
`;

const H4 = styled.h4`
  font-size: 36px;
  font-weight: bold;
  color: #c82127;
  text-align: center;
  margin: 30px 0 0 0;
`;
