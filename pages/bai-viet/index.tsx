import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { Body, H1, H4 } from "../../components/Theme";
import { useState } from "react";

export const Articles = () => {
  return (
    <Wrapper>
      <NavBar />
      <Banner />
      <ArticlesCard />
      <ResearchCard />
    </Wrapper>
  );
};

const ArticlesCard = () => {
  return (
    <ArticlesCardWrapper>
      <div style={{ width: "70%" }}>
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
      </div>
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
    </ArticlesCardWrapper>
  );
};
const ResearchCard = () => {
  const [state, setState] = useState(0);
  return (
    <ArticlesCardWrapper>
      <div style={{ width: "70%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderBottom: "60px solid var(--yellow)",
              borderRight: "40px solid transparent",
              height: "0px",
              width: "300px",
            }}
          >
            <H4
              style={{
                color: "white",
                paddingLeft: "30px",
                lineHeight: "65px",
              }}
            >
              Nghiên cứu
            </H4>
          </div>
          <H4
            style={{
              textDecoration: state == 0 ? "underline" : "",
              cursor: "pointer",
            }}
            onClick={() => setState(0)}
          >
            Tất cả
          </H4>
          <H4
            style={{
              textDecoration: state == 1 ? "underline" : "",
              cursor: "pointer",
            }}
            onClick={() => setState(1)}
          >
            Tri thức bản địa
          </H4>
          <H4
            style={{
              textDecoration: state == 2 ? "underline" : "",
              cursor: "pointer",
            }}
            onClick={() => setState(2)}
          >
            Thổ cẩm
          </H4>
        </div>
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
        <Card
          src="/article.png"
          description="Curabitur nisl dolor, maximus nec odio nec, commodo elementum ligula. Pellentesque tincidunt nec lorem eu varius. Nunc pharetra, lorem sed molestie hendrerit, lacus purus dapibus augue, eu facilisis felis ante a urna. Mauris sit amet arcu sed urna lacinia viverra ac sit amet magna. Morbi placerat"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis eget"
        />
        <Line />
      </div>
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
    </ArticlesCardWrapper>
  );
};

const ArticlesCardWrapper = styled.div`
  display: flex;
  padding: 60px 130px;
  justify-content: space-between;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <H1 style={{ color: "white", textTransform: "uppercase" }}>
        Hoạt động nổi bật
      </H1>
      <BannerLayout>
        <BigCard style={{ gridArea: "a" }} src="/article.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </BigCard>
        <MediumCard style={{ gridArea: "b" }} src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </MediumCard>
        <MediumCard style={{ gridArea: "c" }} src="/activity.png">
          <ImageText>Lorem ipsum dolor sit amet</ImageText>
        </MediumCard>
      </BannerLayout>
    </BannerWrapper>
  );
};

const Card = ({ src, title, description }) => {
  return (
    <CardWrapper>
      <Thumbnail src={src} />
      <CardContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContentWrapper>
    </CardWrapper>
  );
};

const CardTitle = styled(H4)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled(Body)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 30px;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin: 30px 0px;
`;

const Thumbnail = styled.div<{ src: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 280px;
`;

const Wrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  max-width: 1920px;
  margin: auto;
`;

const BannerWrapper = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(200, 33, 39, 0.7),
      rgba(200, 33, 39, 0.7)
    ),
    url(\activityCover.png);
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  box-shadow: 0px -300px 0px white inset;

  padding: 60px 130px;
  row-gap: 60px;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }
`;

const BannerLayout = styled.div`
  display: grid;
  grid-template-areas:
    "a a a a a a a b b"
    "a a a a a a a c c";
  row-gap: 30px;
  column-gap: 30px;
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

const BigCard = styled.div<{ src: string }>`
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
`;

const MediumCard = styled.div<{ src: string }>`
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

export default Articles;
