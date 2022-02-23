import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { H2, H4, Body, ButtonText } from "../../components/Theme";
import Slider from "react-slick";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Head from "next/head";
import Link from "next/link";
import useGetFeaturedActivities from "../../hooks/activity/useGetFeaturedActivities";
import useGetActivities from "../../hooks/activity/useGetActivities";
import useGetPosts from "../../hooks/post/useGetPosts";
import React from "react";

export const Activity = () => {
  const settings = {
    className: "activity",
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
  const { data: activities } = useGetActivities();

  return (
    <>
      <Head>
        <title>Hoạt động</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                src="/prev.png"
                onClick={() => handleClick(-1)}
                style={{
                  cursor: "pointer",
                  width: width <= 900 ? "30px" : "50px",
                  height: width <= 900 ? "30px" : "50px",
                }}
              />
              <SlickSlider ref={sliderRef} {...settings}>
                {activities &&
                  activities.map((activity, index) => {
                    return (
                      <Link
                        key={index}
                        href={`hoat-dong/${activity.titleKebabCase}`}
                        passHref
                      >
                        <SmallImageCard
                          style={{ paddingBottom: "40%" }}
                          src={activity.thumbnailUrl}
                        >
                          <ImageText>{activity.title}</ImageText>
                        </SmallImageCard>
                      </Link>
                    );
                  })}
              </SlickSlider>
              <img
                src="./next.png"
                onClick={() => handleClick(1)}
                style={{
                  cursor: "pointer",
                  width: width <= 900 ? "30px" : "50px",
                  height: width <= 900 ? "30px" : "50px",
                }}
              />
            </SlickContainer>
          )}
          {width < 1000 && (
            <ImageWrapper>
              {activities &&
                activities.map((activity) => {
                  return (
                    <Link
                      key={activity.title}
                      href={`/hoat-dong/${activity.titleKebabCase}`}
                      passHref
                    >
                      <ImageCard
                        style={{
                          width: "max(200px, 100%)",
                          minWidth: "min(200px, 100%)",
                          height: "100px",
                        }}
                        src={activity.thumbnailUrl}
                      >
                        <ImageText>{activity.title}</ImageText>
                      </ImageCard>
                    </Link>
                  );
                })}
            </ImageWrapper>
          )}
        </SliderWrapper>
        <PlaylistSection />
        <FeaturedSection />
      </Wrapper>
    </>
  );
};

const SlickContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SlickSlider = styled(Slider)`
  width: calc(100% - 100px);
  max-width: 1563px;
  margin: 0 15px;
  transition: none;

  & > div > div > div > div {
    padding: 0 15px;
  }
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
  const { data: featuredActivities } = useGetFeaturedActivities();

  return (
    <HighlightsWrapper>
      <HightlightsTitle>Hoạt động nổi bật</HightlightsTitle>
      <ImageWrapper>
        {featuredActivities &&
          featuredActivities.map((activity) => {
            return (
              <Link
                key={activity.titleKebabCase}
                href={`/hoat-dong/${activity.titleKebabCase}`}
                passHref
              >
                <ImageCard src={activity.thumbnailUrl}>
                  <ImageText>{activity.title}</ImageText>
                </ImageCard>
              </Link>
            );
          })}
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
    url("/hero.jpg");
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
  overflow-x: auto;
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

const ImageCard = styled.a<{ src: string }>`
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
  margin: 0px 25px;

  @media screen and (max-width: 1500px) {
    margin: 0px 10px;
  }

  @media screen and (max-width: 1000px) {
    margin: 0px 5px;
  }

  box-shadow: 0px 0px 0px var(--color-yellow) inset;
  transition: all ease-in-out 0.2s;

  &:hover {
    box-shadow: 0px -150px 0px var(--color-yellow) inset;

    @media screen and (max-width: 1300px) {
      box-shadow: 0px -110px 0px var(--color-yellow) inset;
    }

    @media screen and (max-width: 1000px) {
      box-shadow: 0px -100px 0px var(--color-yellow) inset;
    }

    @media screen and (max-width: 500px) {
      box-shadow: 0px -75px 0px var(--color-yellow) inset;
    }
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

const SmallImageCard = styled.a<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 0px 0px 40% 0px;
  display: flex;
  align-items: flex-end;
  position: relative;

  box-shadow: 0px 0px 0px var(--color-yellow) inset;
  transition: all ease-in-out 0.2s;

  &:hover {
    box-shadow: 0px -150px 0px var(--color-yellow) inset;

    @media screen and (max-width: 1300px) {
      box-shadow: 0px -110px 0px var(--color-yellow) inset;
    }

    @media screen and (max-width: 1000px) {
      box-shadow: 0px -100px 0px var(--color-yellow) inset;
    }

    @media screen and (max-width: 500px) {
      box-shadow: 0px -75px 0px var(--color-yellow) inset;
    }
  }
`;

const PlaylistSection = () => {
  const { height, width } = useWindowDimensions();
  return (
    <ActivityWrapper>
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

const FeaturedSection = () => {
  const { width } = useWindowDimensions();
  const { data, fetchNextPage, hasNextPage } = useGetPosts();
  return (
    <>
      <ActivityWrapper style={{ alignItems: "center", margin: "0px" }}>
        <H2 style={{ marginBottom: width <= 900 ? "15px" : "60px" }}>
          BÀI VIẾT NỔI BẬT
        </H2>
        {data &&
          data.pages.map((posts: any, i: number) => {
            return (
              <React.Fragment key={i}>
                {posts.map((post: any) => {
                  return (
                    <>
                      <Card
                        key={post.id}
                        {...post}
                        type="bai-viet"
                        src={post.thumbnailUrl}
                      />
                      <Line
                        style={{
                          backgroundColor: width <= 900 ? "white" : "black",
                        }}
                      />
                    </>
                  );
                })}
              </React.Fragment>
            );
          })}
        {hasNextPage && (
          <ReadMoreButton onClick={() => fetchNextPage()}>
            ĐỌC THÊM
          </ReadMoreButton>
        )}
      </ActivityWrapper>
    </>
  );
};

const ReadMoreButton = styled(ButtonText)`
  color: white;
  padding: 10px 30px;
  border-radius: 15px;
  margin: 30px auto;
  background-color: var(--color-red);
  &:hover {
    background-color: var(--color-dark-red);
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

  @media screen and (max-width: 1200px) {
    padding: 30px;
  }
`;

const Card = ({ src, title, preview, type, titleKebabCase }) => {
  const { width, height } = useWindowDimensions();
  if (width <= 500) {
    return (
      <Link href={`/${type}/${titleKebabCase}`} passHref>
        <a>
          <Thumbnail
            style={{
              height: "200px",
              width: "100%",
              marginBottom: "15px",
            }}
            src={src}
          />
          <CardTitle style={{ marginBottom: "15px" }}>{title}</CardTitle>
          <CardDescription style={{ marginBottom: "40px" }}>
            {preview}
          </CardDescription>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/${type}/${titleKebabCase}`} passHref>
      <CardWrapper>
        <Thumbnail src={src} />
        <CardContentWrapper>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{preview}</CardDescription>
        </CardContentWrapper>
      </CardWrapper>
    </Link>
  );
};

const CardTitle = styled(H4)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 30px;
`;

const CardDescription = styled(Body)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardWrapper = styled.a`
  display: flex;
  width: 100%;
  max-width: 1100px;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin: 10px 0px;
  max-width: 1100px;

  @media screen and (max-width: 900px) {
    margin: 0px;
  }
`;

const Thumbnail = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
  max-width: 280px;
  min-width: 280px;
  margin-right: 30px;

  @media screen and (max-width: 500px) {
    height: 150px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;

export default Activity;
