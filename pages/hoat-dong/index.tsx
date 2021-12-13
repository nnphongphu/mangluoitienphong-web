import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { H1, H2, H4 } from "../../components/Theme";
import Slider from "react-slick";
import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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

  return (
    <Wrapper>
      <NavBar />
      <Highlights />
      <SliderWrapper>
        <H2 style={{ color: "black", textTransform: "uppercase" }}>
          Hoạt động khác
        </H2>
        <SlickContainer>
          <RiArrowLeftSLine
            onClick={() => handleClick(-1)}
            type="prev"
            size="100px"
            cursor="pointer"
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
          <RiArrowRightSLine
            onClick={() => handleClick(1)}
            type="next"
            size="100px"
            cursor="pointer"
          />
        </SlickContainer>
      </SliderWrapper>
    </Wrapper>
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
`;

const Highlights = () => {
  return (
    <HighlightsWrapper>
      <H1 style={{ color: "white", textTransform: "uppercase" }}>
        Hoạt động nổi bật
      </H1>
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

const HighlightsWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(200, 33, 39, 0.7),
      rgba(200, 33, 39, 0.7)
    ),
    url(\activityCover.png);
  background-color: red;
  background-repeat: no-repeat;
  background-position: bottom center;
  box-shadow: 0px -300px 0px white inset;

  padding: 60px 130px;
  row-gap: 60px;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }
`;

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
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
