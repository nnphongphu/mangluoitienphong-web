import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { ButtonText, H1, H2, H4, H5 } from "../components/Theme";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Home() {
  // const { width, height } = useWindowDimensions();
  return (
    <>
      <NavBar />
      <Wrapper>
        <LandingSection />
        <IntroductionSection />
        <IdentitySection />
        <ActivitySection />
        <ParticipantsSection />
        <PartnerSection />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
`;

const BreakLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--yellow);
`;

const ParticipantsSection = () => {
  const { width, height } = useWindowDimensions();
  if (width <= 1200) {
    return (
      <ParticipantsWrapper>
        <H2
          style={{
            color: "var(--red)",
            textAlign: "left",
            fontWeight: "bold",
            margin: "30px 0px",
          }}
        >
          CHIA SẺ CỦA NGƯỜI THAM GIA
        </H2>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}
        >
          <Participant
            name="Nguyen Van A"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
            avatar="/participant.png"
          />
          <BreakLine />
          <Participant
            name="Nguyen Van A"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
            avatar="/participant.png"
          />
          <BreakLine />
          <Participant
            name="Nguyen Van A"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
            avatar="/participant.png"
          />
          <BreakLine />
          <Participant
            name="Nguyen Van A"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
            avatar="/participant.png"
          />
        </div>
      </ParticipantsWrapper>
    );
  }
  return (
    <ParticipantsWrapper>
      <H2
        style={{
          color: "var(--red)",
          textAlign: "left",
          fontWeight: "bold",
          margin: "30px 0px",
        }}
      >
        CHIA SẺ CỦA NGƯỜI THAM GIA
      </H2>
      <ParticipantsGrid>
        <Participant
          name="Nguyen Van A"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
          avatar="/participant.png"
        />
        <Participant
          name="Nguyen Van A"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
          avatar="/participant.png"
        />
        <Participant
          name="Nguyen Van A"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
          avatar="/participant.png"
        />
        <Participant
          name="Nguyen Van A"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget lacus quis malesuada. Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius."
          avatar="/participant.png"
        />
      </ParticipantsGrid>
    </ParticipantsWrapper>
  );
};

const Participant = ({ name, avatar, content }) => {
  const { width } = useWindowDimensions();
  return (
    <ParticipantWrapper>
      <H5>{content}</H5>
      <ParticipantRow>
        <div
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            width: width <= 1200 ? "60px" : "100px",
            height: width <= 1200 ? "60px" : "100px",
            borderRadius: "50%",
          }}
        />
        <H4>{name}</H4>
      </ParticipantRow>
    </ParticipantWrapper>
  );
};

const ParticipantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ParticipantRow = styled.div`
  display: flex;
  column-gap: 30px;
  align-items: center;
`;

const ParticipantsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 130px;
  row-gap: 130px;
`;

const ParticipantsWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  padding: 30px 130px 30px 130px;
  row-gap: 30px;

  @media screen and (max-width: 1500px) {
    padding: 30px 100px 30px 100px;
  }

  @media screen and (max-width: 1200px) {
    padding: 30px;
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
  background-position: top right;
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

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const SquareButton = styled(ButtonText)<{ color: string }>`
  width: 315px;
  height: 170px;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 40px;

  @media screen and (max-width: 900px) {
    padding: 20px;
    height: auto;
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
        <Sticker>
          Mạng lưới kết nối X người đến từ X tỉnh, thành phố khắp Việt Nam
        </Sticker>
        <Sticker style={{ alignSelf: "flex-end" }}>
          Có X dân tộc đã tham gia vào Mạng lưới Tiên Phong
        </Sticker>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <SquareButton color="#C82127">Đọc thêm về Tiên Phong</SquareButton>
          <SquareButton color="#EE5A2A">
            Xem sản phẩm của chúng tôi
          </SquareButton>
        </div>
      </IdentityWrapper>
    );
  }
  return (
    <IdentityWrapper>
      <IdentityContent>
        <H2 style={{ textAlign: "left", color: "white" }}>
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

const ActivityWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  padding: 30px 130px 30px 130px;
  @media screen and (max-width: 1600px) {
    padding: 30px 100px 30px 100px;
  }
  row-gap: 30px;

  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
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
  font-family: Fira Sans;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;

  @media screen and (max-width: 1700px) {
    column-gap: 30px;
  }
`;

const ImageText = styled(H4)`
  color: white;
  width: 100%;
  position: absolute;
  text-align: center;
  padding: 30px 30px 0px 30px;
  bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageCard = styled.div<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding-bottom: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;

  box-shadow: 0px 0px 0px var(--yellow) inset;
  transition: all ease-in-out 0.2s;
  &:hover {
    box-shadow: 0px -150px 0px var(--yellow) inset;
  }
`;

const ActivitySection = () => {
  const { width, height } = useWindowDimensions();
  if (width <= 1200) {
    return (
      <ActivityWrapper>
        <H2
          style={{
            color: "var(--red)",
            textAlign: "left",
            fontWeight: "bold",
            margin: "30px 0px",
            textTransform: "uppercase",
          }}
        >
          Các hoạt động của Mạng lưới Tiên Phong
        </H2>
        <div
          style={{
            width: "75%",
            alignSelf: "center",
            rowGap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ImageCard src="/activity.png">
            <ImageText>Lorem ipsum dolor sit amet.</ImageText>
          </ImageCard>
          <ImageCard src="/activity.png">
            <ImageText>Lorem ipsum dolor sit amet</ImageText>
          </ImageCard>
        </div>
        <Button> Xem thêm </Button>
      </ActivityWrapper>
    );
  }
  return (
    <ActivityWrapper>
      <H2
        style={{
          color: "var(--red)",
          textAlign: "left",
          fontWeight: "bold",
          margin: "30px 0px",
        }}
      >
        Các hoạt động của Mạng lưới Tiên Phong
      </H2>
      <ImageWrapper>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet.</ImageText>
        </ImageCard>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </ImageCard>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </ImageCard>
      </ImageWrapper>
      <Button> Xem thêm </Button>
    </ActivityWrapper>
  );
};

const IntroductionWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  background-color: #c82127;
  padding: 0px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0px 30px 0px 30px;
  }

  @media screen and (max-width: 900px) {
    padding: 0px 30px 100px 30px;
  }
`;

const Column = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  margin: 30px 0px 50px 0px;
  @media screen and (max-width: 900px) {
    margin: 0px;
    width: 100%;
    align-items: flex-start;
    row-gap: 20px;
  }

  @media screen and (max-width: 500px) {
    row-gap: 10px;
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

const ReverseTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  border-top: 130px solid white;
  align-self: flex-start;
  @media screen and (max-width: 1200px) {
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-top: 100px solid white;
  }

  @media screen and (max-width: 900px) {
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 80px solid white;
  }

  @media screen and (max-width: 500px) {
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 70px solid white;
  }
`;

const IntroductionSection = () => {
  const { width, height } = useWindowDimensions();
  if (width <= 900) {
    return (
      <IntroductionWrapper>
        <Column>
          <ReverseTriangle />
          <H2 style={{ textAlign: "left", color: "white" }}>CÂU CHUYỆN</H2>
          <B style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum arcu, semper ut magna eget, lobortis ultrices massa.
            Suspendisse facilisis felis eu nisl sollicitudin suscipit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris elementum ex ac enim luctus
            scelerisque. Etiam ac congue risus.
          </B>
          <H2 style={{ textAlign: "left", color: "white" }}>SỨ MỆNH</H2>
          <B style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum arcu, semper ut magna eget, lobortis ultrices massa.
            Suspendisse facilisis felis eu nisl sollicitudin suscipit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Mauris elementum ex ac enim luctus
            scelerisque. Etiam ac congue risus.
          </B>
        </Column>
      </IntroductionWrapper>
    );
  }
  return (
    <IntroductionWrapper>
      <Column>
        <H2 style={{ color: "white" }}>CÂU CHUYỆN</H2>
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
        <H2 style={{ color: "white" }}>SỨ MỆNH</H2>
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
      <LandingText>
        mạng lưới <br /> tiên phong
      </LandingText>
      <Subtitle>vì tiếng nói của người dân tộc thiểu số</Subtitle>
    </LandingWrapper>
  );
};

const Subtitle = styled.span`
  color: var(--red);
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin: 0px;

  @media screen and (max-width: 900px) {
    font-size: 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

const LandingWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - 138px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  min-height: 600px;
  max-height: 1080px;

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 30px 0px 50px 0px;
    min-height: 300px;
    max-height: 700px;
  }
`;

const LandingText = styled(H1)`
  font-size: min(max(20vh, 150px), 200px);
  line-height: normal;
  color: #c82127;
  text-align: center;
  font-weight: bolder;
  margin: 0;

  @media screen and (max-width: 900px) {
    font-size: 100px;
  }

  @media screen and (max-width: 700px) {
    font-size: 70px;
  }

  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

const PartnerSection = () => {
  return (
    <PartnerWrapper>
      <H2 style={{ color: "white", textTransformation: "uppercase" }}>
        Đối tác của chúng tôi
      </H2>
    </PartnerWrapper>
  );
};

const PartnerWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  padding: 60px 130px;
  background-color: var(--red);
  display: flex;
  margin: 60px 0px 0px 0px;
`;
