import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { H1, H2, H4 } from "../../components/Theme";
import Slider from "react-slick";
import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Activity = () => {
  const settings = {
    arrows: false,
    draggable: false,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    initialSlide: 2,
  };

  const sliderRef = useRef<any>(null);

  const handleClick = (delta: Number) => {
    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const { width } = useWindowDimensions();

  return (
    <>
      <NavBar />
      <Wrapper>
        <Highlights />
        <SliderWrapper>
          <H2 style={{ color: "black", textTransform: "uppercase" }}>
            Hoạt động khác
          </H2>
          {width >= 1000 && (
            <SlickContainer>
              <img
                src="./prev.png"
                onClick={() => handleClick(-1)}
                style={{
                  cursor: "pointer",
                }}
              />
              <SlickSlider ref={sliderRef} {...settings}>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
                <SmallImageCard
                  style={{ paddingBottom: "40%" }}
                  src="/activity.png"
                >
                  <ImageText>Lorem ipsum dolor sit amet</ImageText>
                </SmallImageCard>
              </SlickSlider>
              <img
                src="./next.png"
                onClick={() => handleClick(1)}
                style={{
                  cursor: "pointer",
                }}
              />
            </SlickContainer>
          )}

          {width < 1000 && (
            <ImageWrapper>
              <ImageCard
                style={{
                  width: "max(200px, 100%)",
                  minWidth: "min(200px, 100%)",
                  height: "100px",
                }}
                src="/activity.png"
              >
                <ImageText>Lorem ipsum dolor sit amet</ImageText>
              </ImageCard>
              <ImageCard
                style={{
                  width: "max(200px, 100%)",
                  minWidth: "min(200px, 100%)",
                  height: "100px",
                }}
                src="/activity.png"
              >
                <ImageText>Lorem ipsum dolor sit amet</ImageText>
              </ImageCard>
              <ImageCard
                style={{
                  width: "max(200px, 100%)",
                  minWidth: "min(200px, 100%)",
                  height: "100px",
                }}
                src="/activity.png"
              >
                <ImageText>Lorem ipsum dolor sit amet</ImageText>
              </ImageCard>
            </ImageWrapper>
          )}
        </SliderWrapper>
      </Wrapper>
    </>
  );
};

const SlickContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SlickSlider = styled(Slider)`
  width: 80vw;
  max-width: 1563px;
  transition: none;
`;

const SliderWrapper = styled.div`
  padding: 60px 130px;
  row-gap: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0px 0px;
    row-gap: 30px;
  }
`;

const Highlights = () => {
  return (
    <HighlightsWrapper>
      <HightlightsTitle>Hoạt động nổi bật</HightlightsTitle>
      <ImageWrapper>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </ImageCard>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </ImageCard>
        <ImageCard src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </ImageCard>
      </ImageWrapper>
    </HighlightsWrapper>
  );
};

const HightlightsTitle = styled(H2)`
  color: white;
  text-transform: uppercase;
  margin-top: 30px;

  @media screen and (max-width: 1000px) {
    margin: 0px 30px;
    margin-top: 30px;
  }
`;

const HighlightsWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(200, 33, 39, 0.7),
      rgba(200, 33, 39, 0.7)
    ),
    url(${"/activityCover.png"});
  background-color: red;
  background-repeat: no-repeat;
  background-position: bottom center;
  box-shadow: 0px -300px 0px white inset;
  margin-bottom: 30px;

  padding: 60px 130px;
  row-gap: 60px;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
    box-shadow: 0px -200px 0px white inset;
  }

  @media screen and (max-width: 1200px) {
    box-shadow: 0px -80px 0px white inset;
    padding: 0px 30px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0px;
  }

  @media screen and (max-width: 500px) {
    box-shadow: 0px -30px 0px white inset;
  }
`;

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 100px;
  overflow-x: auto;

  @media screen and (max-width: 1700px) {
    column-gap: 30px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
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

  @media screen and (max-width: 1200px) {
    padding: 10px 10px 0px 10px;
  }

  @media screen and (max-width: 500px) {
    padding: 5px;
  }
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

  @media screen and (max-width: 1000px) {
    padding: 5px;
    width: max(250px, 100%);
    min-width: min(250px, 100%);
    height: 250px;
    padding: 0px;
  }

  &:first-child {
    @media screen and (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-child {
    @media screen and (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

const SmallImageCard = styled.div<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 0px 0px 60% 0px;
  display: flex;
  align-items: flex-end;
  position: relative;

  box-shadow: 0px 0px 0px var(--yellow) inset;
  transition: all ease-in-out 0.2s;
  &:hover {
    box-shadow: 0px -150px 0px var(--yellow) inset;
  }
`;

export default Activity;
