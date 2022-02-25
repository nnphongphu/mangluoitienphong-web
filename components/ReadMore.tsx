import useGetPosts from "../hooks/post/useGetPosts";
import useGetActivities from "../hooks/activity/useGetActivities";
import { H2, H4 } from "./Theme";
import styled from "styled-components";
import Link from "next/link";
import { UseInfiniteQueryResult, UseQueryResult } from "react-query";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const ReadMore: React.FC<{
  type: "bai-viet" | "hoat-dong";
  getData: UseInfiniteQueryResult<any, unknown>;
}> = ({ type, getData }) => {
  const { data } = getData;

  return (
    <>
      <H2 style={{ marginTop: "70px", width: "100%", textAlign: "center" }}>
        BÀI VIẾT KHÁC
      </H2>
      <div style={{ overflowX: "auto", display: "flex", width: "100%" }}>
        {data &&
          data.pages[getRndInteger(0, data.pages.length - 1)].map(
            (post, index) => {
              if (index > 2) return null;
              return (
                <Link
                  key={index}
                  href={`/${type}/${post.titleKebabCase}`}
                  passHref
                >
                  <MediumCard
                    style={{ margin: "30px 15px" }}
                    src={post.thumbnailUrl}
                  >
                    <ImageTextWrapper>
                      <ImageText>{post.title}</ImageText>
                    </ImageTextWrapper>
                  </MediumCard>
                </Link>
              );
            }
          )}
      </div>
    </>
  );
};

const ImageTextWrapper = styled.div`
  color: white;
  width: 100%;
  position: absolute;
  text-align: center;
  padding: 30px 30px 30px 30px;
  display: -webkit-box;
  bottom: 0;
  transition: all ease-in-out 0.2s;
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
  display: flex;
  width: 30%;
  min-width: 300px;
  height: 300px;
  align-items: flex-end;
  position: relative;

  &:hover ${ImageTextWrapper} {
    background-color: var(--color-yellow);
  }

  @media screen and (max-width: 1700px) {
    min-width: 250px;
  }

  @media screen and (max-width: 1200px) {
    height: 220px;
  }
`;

const ImageText = styled(H4)`
  color: white;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all ease-in-out 0.2s;
`;

export default ReadMore;
