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
        <SubWrapper style={{ backgroundColor: "var(--color-dark-red)" }}>
          <H5 style={{ color: "white" }}>
            Tiên Phong là mạng lưới vì tiếng nói dân tộc thiểu số Việt Nam với
            sứ mệnh: Cùng nhau gìn giữ bản sắc văn hóa các dân tộc, bảo tồn và
            phát huy tri thức bản địa. Tham gia vận động chính sách, và lan tỏa
            đến xã hội nhằm tạo ra sự hiểu biết đúng đắn về người dân tộc thiểu
            số, góp phần xây dựng một xã hội bình đẳng, đa dạng và phát triển
            bền vững. Truyền cảm hứng đến với mọi người về tinh thần Tự hào - Tự
            tin - Tự chủ nhằm bảo tồn phát huy những tri thức bản địa và giá trị
            văn hóa hóa truyền thống của các dân tộc thiểu số.
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
            marginBottom: "30px",
          }}
        >
          MẠNG LƯỚI CỦA CHÚNG TÔI
        </H2>
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          Mạng lưới Tiên Phong là nhóm thuộc các dân tộc thiểu số Việt Nam được
          thành lập năm 2015. Đến nay nhóm đã có hơn 17 dân tộc trên 20 tỉnh
          thành khác nhau.
        </H4>
        {/* <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Mạng lưới Tiên Phong là nhóm thuộc các dân tộc thiểu số Việt Nam được
          thành lập năm 2015. Đến nay nhóm đã có hơn 17 dân tộc trên 20 tỉnh
          thành khác nhau.
        </B> */}
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          Hiện nay nhóm Tiên Phong vẫn đang mở rộng liên kết các nhóm dân tộc
          khác cùng tham gia.
        </H4>
        {/* <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Hiện nay nhóm Tiên Phong vẫn đang mở rộng liên kết các nhóm dân tộc
          khác cùng tham gia.
        </B> */}
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
          MẠNG LƯỚI CỦA CHÚNG TÔI
        </H2>
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          Mạng lưới Tiên Phong là nhóm thuộc các dân tộc thiểu số Việt Nam được
          thành lập năm 2015. Đến nay nhóm đã có hơn 17 dân tộc trên 20 tỉnh
          thành khác nhau.
        </H4>
        {/* <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Mạng lưới Tiên Phong là nhóm thuộc các dân tộc thiểu số Việt Nam được
          thành lập năm 2015. Đến nay nhóm đã có hơn 17 dân tộc trên 20 tỉnh
          thành khác nhau.
        </B> */}
        <H4 style={{ color: "white", textAlign: "left", marginBottom: "15px" }}>
          Hiện nay nhóm Tiên Phong vẫn đang mở rộng liên kết các nhóm dân tộc
          khác cùng tham gia.
        </H4>
        {/* <B style={{ textAlign: "left", width: "100%", marginBottom: "30px" }}>
          Hiện nay nhóm Tiên Phong vẫn đang mở rộng liên kết các nhóm dân tộc
          khác cùng tham gia.
        </B> */}
      </IdentityContent>
      <IdentityStickers>
        <Sticker>Mạng lưới kết nối 20 tỉnh, thành phố khắp Việt Nam</Sticker>
        <Sticker>Có 17 dân tộc đã tham gia vào Mạng lưới Tiên Phong</Sticker>
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
  width: 50%;
  position: relative;
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
