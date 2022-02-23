import styled from "styled-components";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { H1, H2, H5, H4, ButtonText } from "../components/Theme";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Về chúng tôi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Wrapper>
        <PageIndicator>VỀ CHÚNG TÔI</PageIndicator>
        <SubWrapper style={{ backgroundColor: "var(--color-red)" }}>
          <H2 style={{ marginBottom: "30px", color: "white" }}>
            MẠNG LƯỚI TIÊN PHONG LÀ GÌ
          </H2>
          <H5 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum arcu, semper ut magna eget, lobortis ultrices massa.
            Suspendisse facilisis felis eu nisl sollicitudin suscipit.
            Ellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris elementum ex ac enim luctus
            scelerisque. Etiam ac congue risus.
          </H5>
        </SubWrapper>
        <IdentitySection />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
`;

const SubWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  z-index: 0;
  padding: 80px 130px 80px 130px;

  @media screen and (max-width: 1600px) {
    padding: 60px 100px 60px 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 30px;
  }
`;

const PageIndicator = styled(H1)`
  width: calc(100vw - (100vw - 100%));
  padding: 80px 130px 80px 130px;
  color: white;
  background-image: linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)),
    url("hero.jpg");
  background-position: center center;
  background-size: cover;

  @media screen and (max-width: 1600px) {
    padding: 60px 100px 60px 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 30px;
  }
`;

const IdentitySection = () => {
  const { width, height } = useWindowDimensions();
  if (width <= 1200) {
    return (
      <IdentityWrapper>
        <H2
          style={{
            textAlign: "left",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          Mạng lưới Tiên Phong là gì?
        </H2>
        <H4 style={{ color: "white", textAlign: "left" }}>
          1. Lorem ipsum dolor
        </H4>
        <B style={{ textAlign: "left", width: "100%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
        <H4 style={{ color: "white", textAlign: "left" }}>
          2. Lorem ipsum dolor sit amet
        </H4>
        <B style={{ textAlign: "left", width: "100%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
        <Sticker style={{ marginBottom: "30px" }}>
          Mạng lưới kết nối X người đến từ X tỉnh, thành phố khắp Việt Nam
        </Sticker>
        <Sticker style={{ alignSelf: "flex-end" }}>
          Có X dân tộc đã tham gia vào Mạng lưới Tiên Phong
        </Sticker>
      </IdentityWrapper>
    );
  }
  return (
    <IdentityWrapper>
      <IdentityContent>
        <H2 style={{ textAlign: "left", color: "white", marginBottom: "30px" }}>
          Mạng lưới Tiên Phong là gì?
        </H2>
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          1. Lorem ipsum dolor
        </H4>
        <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          2. Lorem ipsum dolor sit amet
        </H4>
        <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          arcu, semper ut magna eget, lobortis ultrices massa. Suspendisse
          facilisis felis eu nisl sollicitudin suscipit. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fam
        </B>
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

const Sticker = styled(H5)`
  width: 407px;
  height: 178px;
  background: #ffffff;
  border-radius: 0px 30px;
  color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media screen and (max-width: 1200px) {
    width: 60vw;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
    height: 100px;
    width: 60vw;
  }
`;

const IdentityWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 860px;
  display: flex;
  justify-content: space-between;
  padding: 130px 130px 0px 130px;
  background-color: #f6a320;
  background-image: url("/map.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: contain;

  @media screen and (max-width: 1500px) {
    padding: 100px 100px 0px 100px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 30px 30px 0px 30px;
    row-gap: 30px;
    height: auto;

    @media screen and (max-width: 900px) {
      row-gap: 20px;
    }
  }
`;

const IdentityContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 50%;
  position: relative;

  @media screen and (max-width: 1600px) {
    row-gap: 15px;
  }
`;

const B = styled.b`
  font-style: normal;
  font-weight: normal;
  font-family: Fira Sans;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;

export default AboutPage;
