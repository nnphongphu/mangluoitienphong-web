import Head from "next/head";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { useRouter } from "next/router";
import useGetPost from "../../hooks/post/useGetPost";
import { Markup } from "interweave";
import { H1, H5, Loading } from "../../components/Theme";
import ReadMore from "../../components/ReadMore";
import useGetPosts from "../../hooks/post/useGetPosts";

export const Post = () => {
  const router = useRouter();
  const { titleKebabCase } = router.query;
  const { data, isLoading } = useGetPost(titleKebabCase as any);

  return (
    <>
      <Head>
        <title>
          {isLoading
            ? "Đang tải"
            : data
            ? data.title
            : "Không tìm thấy bài viết"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <NavBar />
        <Container>
          {isLoading && <Loading color="var(--color-dark-red)" />}
          {!isLoading && !data && (
            <H1
              style={{ width: "100%", marginTop: "30px", textAlign: "center" }}
            >
              404. Không tìm thấy bài viết.
            </H1>
          )}
          {!isLoading && data && (
            <>
              <H1
                style={{
                  width: "100%",
                  margin: "min(60px, 10vw) 0px min(60px, 10vw) 0px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {data?.title}
              </H1>
              <H5 style={{ width: "100%", marginBottom: "min(60px, 10vw)" }}>
                {data?.preview}
              </H5>
              <div className="ck-content" style={{ width: "100%" }}>
                {/* //<div dangerouslySetInnerHTML={{ __html: post?.body }} /> */}
                <Markup content={data?.body} />
              </div>
            </>
          )}
          <ReadMore type="bai-viet" getData={useGetPosts()} />
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  width: min(65vw, 1275px);
  padding: 60px;

  @media screen and (max-width: 1400px) {
    padding: 0px;
    width: 80%;
    margin: 0;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export default Post;
