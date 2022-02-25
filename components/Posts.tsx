import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Body, H1, H4, ButtonText } from "../components/Theme";
import Head from "next/head";
import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { UseInfiniteQueryResult, UseQueryResult } from "react-query";
import React from "react";

export const Posts: React.FC<{
  title: string;
  useGetFeaturedPosts: UseQueryResult<any, unknown>;
  useGetPosts: UseInfiniteQueryResult<any, unknown>;
}> = ({ useGetFeaturedPosts, useGetPosts, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Wrapper>
        <Banner title={title} useGetFeaturedPosts={useGetFeaturedPosts} />
        <ArticlesCard useGetPosts={useGetPosts} />
      </Wrapper>
    </>
  );
};

const ArticlesCard: React.FC<{
  useGetPosts: UseInfiniteQueryResult<any, unknown>;
}> = ({ useGetPosts }) => {
  const { width } = useWindowDimensions();
  const { data, hasNextPage, fetchNextPage } = useGetPosts;

  if (data && (data.pages.length === 0 || data.pages[0].length === 0))
    return (
      <H4 style={{ marginTop: "30px", marginLeft: "30px", height: "100vh" }}>
        Chưa có bài viết thuộc danh mục này.
      </H4>
    );

  return (
    <ArticlesCardWrapper>
      <div style={{ width: width > 1200 ? "70%" : "100%" }}>
        <Line
          style={{
            backgroundColor: width <= 900 ? "white" : "black",
          }}
        />
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
                          backgroundColor: width < 500 ? "white" : "black",
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
            XEM THÊM
          </ReadMoreButton>
        )}
      </div>

      {width > 1200 && (
        <div style={{ width: "25%" }}>
          <div
            style={{
              backgroundImage: "url(/ads.png)",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      )}
    </ArticlesCardWrapper>
  );
};

const ReadMoreButton = styled(ButtonText)`
  color: white;
  padding: 10px 30px;
  border-radius: 15px;
  cursor: pointer;
  margin: 30px auto;
  background-color: var(--color-dark-red);
  &:hover {
    background-color: var(--color-dark-red);
  }
`;

const ArticlesCardWrapper = styled.div`
  display: flex;
  padding: 60px 130px;
  justify-content: space-between;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }

  @media screen and (max-width: 1200px) {
    padding: 0px 30px;
  }
`;

const Banner: React.FC<{
  title: string;
  useGetFeaturedPosts: UseQueryResult<any, unknown>;
}> = ({ useGetFeaturedPosts, title }) => {
  const { data } = useGetFeaturedPosts;
  if (data && data.length === 0) return null;

  return (
    <BannerWrapper>
      <BannerTitle>{title.toUpperCase()}</BannerTitle>
      <BannerLayout>
        {data && data.length && (
          <Link href={`/bai-viet/${data[0].titleKebabCase}`} passHref>
            <BigCard style={{ gridArea: "a" }} src={data[0].thumbnailUrl}>
              <ImageText>{data[0].title}</ImageText>
            </BigCard>
          </Link>
        )}
        {data && data.length > 1 && (
          <Link href={`/bai-viet/${data[1].titleKebabCase}`} passHref>
            <MediumCard style={{ gridArea: "b" }} src={data[1].thumbnailUrl}>
              <ImageText>{data[1].title}</ImageText>
            </MediumCard>
          </Link>
        )}
        {data && data.length > 2 && (
          <Link href={`/bai-viet/${data[2].titleKebabCase}`} passHref>
            <MediumCard style={{ gridArea: "c" }} src={data[2].thumbnailUrl}>
              <ImageText>{data[2].title}</ImageText>
            </MediumCard>
          </Link>
        )}
      </BannerLayout>
    </BannerWrapper>
  );
};

const BannerTitle = styled(H1)`
  color: white;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
`;

const Thumbnail = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  overflow: hidden;
`;

const BannerWrapper = styled.div`
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
  padding: 0px 130px;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
    box-shadow: 0px -200px 0px white inset;
  }

  @media screen and (max-width: 1200px) {
    box-shadow: 0px -80px 0px white inset;
    padding: 0px 30px;
  }

  @media screen and (max-width: 500px) {
    box-shadow: 0px calc(-50vw * 3 - 200px) 0px white inset;
  }
`;

const BannerLayout = styled.div`
  display: grid;
  grid-template-areas:
    "a a a a a a a b b"
    "a a a a a a a c c";
  row-gap: 30px;
  column-gap: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-areas:
      "a a a a"
      "a a a a"
      "b b c c";
  }

  @media screen and (max-width: 500px) {
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;

const ImageText = styled(H4)`
  color: white;
  width: 100%;
  position: absolute;
  text-align: left;
  padding: 30px 30px 0px 30px;
  bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BigCard = styled.a<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding-bottom: 50%;
  display: flex;
  align-items: flex-end;
  position: relative;

  @media screen and (max-width: 500px) {
    padding-bottom: 100%;
  }
`;

const MediumCard = styled.a<{ src: string }>`
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
  margin: 30px 0px;
  max-width: 1100px;

  @media screen and (max-width: 500px) {
    margin: 0px;
  }
`;

export default Posts;
