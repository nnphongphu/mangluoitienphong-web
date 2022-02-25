import Head from "next/head";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { ButtonText, H1, H2, H4, H5, Loading } from "../components/Theme";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Link from "next/link";
import useGetUpdates from "../hooks/useGetUpdates";
import Slider from "react-slick";
import { useRef } from "react";
import useGetParticipants from "../hooks/useGetParticipants";

export default function Home() {
  // const { width, height } = useWindowDimensions();
  return (
    <>
      <Head>
        <title>Mạng lưới Tiên phong</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Wrapper>
        <LandingSection />
        <IntroductionSection />
        <VideoSection />
        <ActivitySection />
        <PlaylistSection />
        <ParticipantsSection />
        <PartnerSection />
      </Wrapper>
    </>
  );
}

const PlaylistSection = () => {
  const { height, width } = useWindowDimensions();
  return (
    <ActivityWrapper>
      <H2
        style={{
          color: "var(--color-dark-red)",
          textAlign: "left",
          fontWeight: "bold",
          margin: "30px 0px",
          textTransform: "uppercase",
        }}
      >
        HOẠT ĐỘNG
      </H2>
      <iframe
        width="100%"
        height={width <= 900 ? "300px" : "700px"}
        src="https://www.youtube.com/embed/videoseries?list=PLKmVSxKwU5E32Lrg9SvQGT_GMbH-Piyrb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </ActivityWrapper>
  );
};

const VideoSection = () => {
  return (
    <>
      <Video autoPlay muted loop style={{ maxWidth: "1920px" }}>
        <source src="/intro.mp4" type="video/mp4" />
      </Video>
    </>
  );
};

const Video = styled.video`
  width: 100vw;
  height: auto;
  pointer-events: none;
  object-fit: cover;
  min-height: 300px;
`;

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
`;

const SlickSlider = styled(Slider)`
  width: 90%;
  transition: none;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const ParticipantsSection = () => {
  const { width, height } = useWindowDimensions();
  const sliderRef = useRef<any>(null);

  const handleClick = (delta: Number) => {
    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    className: "participant-slide",
    infinite: true,
    slidesToShow: width <= 900 ? 1 : 3,
    autoplay: false,
    arrows: false,
  };

  const { data } = useGetParticipants();

  return (
    <ParticipantWrapper>
      <H2
        style={{
          color: "var(--color-dark-red)",
          textAlign: "left",
          fontWeight: "bold",
          margin: "30px 0px",
        }}
      >
        CHIA SẺ NGƯỜI THAM GIA
      </H2>
      {data && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="/prev.png"
            onClick={() => handleClick(-1)}
            style={{
              cursor: "pointer",
              width: width <= 900 ? "30px" : "50px",
              height: width <= 900 ? "30px" : "50px",
            }}
          />
          <SlickSlider ref={sliderRef} {...settings}>
            {data.map((participant) => {
              return (
                <Participant key={participant.thumbnailUrl} {...participant} />
              );
            })}
          </SlickSlider>
          <img
            src="/next.png"
            onClick={() => handleClick(1)}
            style={{
              cursor: "pointer",
              width: width <= 900 ? "30px" : "50px",
              height: width <= 900 ? "30px" : "50px",
            }}
          />
        </div>
      )}
    </ParticipantWrapper>
  );
};

const Participant: React.FC<{
  name: string;
  content: string;
  thumbnailUrl: string;
}> = ({ name, content, thumbnailUrl }) => {
  const { width } = useWindowDimensions();
  return (
    <div
      style={{
        padding: width <= 900 ? "50px 0px 0px 0px" : "50px 10px 0px 10px",
        height: "100%",
      }}
    >
      <SliderItemWrapper>
        <Avatar src={thumbnailUrl} />
        <H4 style={{ color: "white ", alignSelf: "center" }}>{name}</H4>
        <H5
          style={{ color: "white ", textAlign: "center", paddingTop: "30px" }}
        >
          {content}
        </H5>
      </SliderItemWrapper>
    </div>
  );
};

const SliderItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-dark-red);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 80px 15px 30px 15px;
`;

const Avatar = styled.div<{ src: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const ParticipantWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  padding: 30px 130px 30px 130px;

  @media screen and (max-width: 1600px) {
    padding: 30px 100px 30px 100px;
  }

  @media screen and (max-width: 1200px) {
    padding: 30px;
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

const ImageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;

  @media screen and (max-width: 1700px) {
    column-gap: 50px;
  }
`;

const ImageTextWrapper = styled.div`
  color: white;
  width: 100%;
  position: absolute;
  padding: 30px 30px 30px 30px;
  display: -webkit-box;
  bottom: 0;
  transition: all ease-in-out 0.2s;
`;

const ImageText = styled(H4)`
  color: white;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all ease-in-out 0.2s;
`;

const ImageCard = styled.a<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding-bottom: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;

  &:hover ${ImageTextWrapper} {
    background-color: var(--color-yellow);
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
  }
`;

const ActivitySection = () => {
  const { width } = useWindowDimensions();
  const { data, isLoading } = useGetUpdates();

  return (
    <ActivityWrapper>
      <H2
        style={{
          color: "var(--color-dark-red)",
          textAlign: "left",
          fontWeight: "bold",
          margin: "30px 0px",
        }}
      >
        CẬP NHẬT
      </H2>
      {isLoading && <Loading color="var(--color-dark-red)" />}
      {!isLoading && data && (
        <ImageWrapper
          style={{
            display: width <= 500 ? "flex" : "grid",
            gridTemplateColumns: width <= 900 ? "1fr 1fr" : "1fr 1fr 1fr",
            flexDirection: "column",
          }}
        >
          {data.map((update, index) => {
            if (width <= 900 && width > 500 && index === 2) return null;
            return (
              <Link
                key={index}
                href={`/${update.type}/${update.titleKebabCase}`}
                passHref
              >
                <ImageCard src={update.thumbnailUrl}>
                  <ImageTextWrapper>
                    <ImageText>{update.title}</ImageText>
                  </ImageTextWrapper>
                </ImageCard>
              </Link>
            );
          })}
        </ImageWrapper>
      )}
    </ActivityWrapper>
  );
};

const IntroductionWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  background-color: var(--color-dark-red);
  padding: 0px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0px 30px 0px 30px;
  }

  @media screen and (max-width: 900px) {
    padding: 0px 15px 0px 15px;
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
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
  border-top: 40px solid white;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const IntroductionSection = () => {
  const { height, width } = useWindowDimensions();
  return (
    <IntroductionWrapper>
      {width <= 900 && <ReverseTriangle style={{ display: "block" }} />}
      <H2 style={{ color: "white", marginTop: width <= 900 ? "30px" : "0px" }}>
        TỰ HÀO - TỰ TIN - TỰ CHỦ
      </H2>
      <Column>
        <ReverseTriangle />
        <Link href="/ve-chung-toi" passHref>
          <ReadMoreButton>
            <ButtonText style={{ color: "white" }}>
              ĐỌC THÊM <br /> VỀ TIÊN PHONG
            </ButtonText>
          </ReadMoreButton>
        </Link>
      </Column>
    </IntroductionWrapper>
  );
};

const LandingSection = () => {
  const ref = useRef<any>();
  const { width } = useWindowDimensions();
  return (
    <LandingSuperWrapper>
      <LandingWrapper
        style={{
          overflow: "hidden",
          position: width >= 900 ? "absolute" : "static",
        }}
        onMouseMove={(e) => {
          const mouseRadius = width <= 900 ? 50 : 150;
          if (ref.current) {
            ref.current.style.left = e.pageX - mouseRadius + "px";
            ref.current.style.top = e.pageY - mouseRadius + "px";
          }
        }}
        onMouseEnter={() => {
          if (ref.current) ref.current.style.display = "block";
        }}
        onMouseLeave={() => {
          if (ref.current) ref.current.style.display = "none";
        }}
      >
        {width >= 900 && <HiddenImage ref={ref} src="/hero.jpg" />}
        <LandingText style={{ pointerEvents: "none" }}>
          Mạng lưới Tiên phong
        </LandingText>
        <Subtitle style={{ pointerEvents: "none" }}>
          vì tiếng nói của người dân tộc thiểu số
        </Subtitle>
      </LandingWrapper>
    </LandingSuperWrapper>
  );
};

const HiddenImage = styled.div<{ src: string }>`
  background: linear-gradient(rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4)),
    url(${({ src }) => src}) no-repeat fixed;
  background-position: center center;
  z-index: 1;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;

  @media screen and (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
`;

const ReadMoreButton = styled.a`
  padding: 30px;
  width: 300px;
  background-color: var(--color-yellow);
  color: white;
  text-align: center;
  margin: 25px 0px 75px 0px;

  @media screen and (max-width: 1200px) {
    margin: 30px 0px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 30px 30px;
    padding: 15px;
  }
`;

const Subtitle = styled.span`
  color: var(--color-dark-red);
  font-family: Fira Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin: 0px;
  z-index: 2;

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

const LandingSuperWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - 90px);
  max-width: 1920px;
  margin: auto;
  min-height: 600px;
  max-height: 1080px;

  @media screen and (max-width: 900px) {
    height: calc(100vh - 60px);
    padding: 0px 0px 50px 0px;
    min-height: 300px;
    max-height: 700px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
  }
`;

const LandingWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  max-height: 1080px;
  max-width: 1920px;
  margin: auto;
  z-index: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("/hero.jpg");
  background-attachment: fixed;

  background-position: center center;

  @media screen and (max-width: 900px) {
    height: calc(100vh - 60px);
    padding: 30px 0px 50px 0px;
    min-height: 300px;
    max-height: 700px;
  }

  @media screen and (max-width: 800px) {
    height: 300px;
  }
`;

const LandingText = styled(H1)`
  font-size: min(max(20vh, 150px), 150px);
  line-height: normal;
  color: --color-dark-red;
  text-align: center;
  font-weight: bolder;
  margin: 0;
  z-index: 2;
  background-image: linear-gradient(rgba(255, 0, 0, 0.4), rgba(255, 0, 0, 0.4)),
    url("/hero.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1600px) {
    font-size: 130px;
  }

  @media screen and (max-width: 1400px) {
    font-size: 100px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 80px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 65px;
  }

  @media screen and (max-width: 750px) {
    font-size: 45px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }

  @media screen and (max-width: 300px) {
    font-size: 25px;
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
  background-color: var(--color-dark-red);
  display: flex;
  margin: 60px 0px 0px 0px;
`;
