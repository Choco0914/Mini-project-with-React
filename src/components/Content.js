import React from "react";
import MarkDown from "react-markdown";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  position: ${props => (props.clicked ? "static" : "absolute")};
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow: scroll;
  height: 100%;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Img = styled.img`
  display: ${props => (props.loaded ? "block" : "none")};
  align-self: center;
  width: 110px;
  top: 0;
  position: sticky;
`;

const Description = styled.div`
  padding-bottom: 20px;
  p {
    width: 600px;
  }
`;

const Content = ({
  indActivist,
  selectedItem,
  loaded,
  clicked,
  onLoadedImg
}) => {
  const { photoSrc } = indActivist[selectedItem],
    Name = `# ${indActivist[selectedItem].name}`,
    Hungyeog = `## 훈격\n\n* ${indActivist[selectedItem].hungyeog}`,
    Seohun = `## 서훈년도\n\n* ${indActivist[selectedItem].seohun}`,
    Introduction = `## 서문\n\n ${indActivist[selectedItem].introduction}`;
  return (
    <Container clicked={clicked}>
      {loaded ? (
        <ContentContainer>
          <Img onLoad={onLoadedImg} src={photoSrc} loaded={loaded} />
          <Description>
            <MarkDown source={Name} />
            <MarkDown source={Hungyeog} />
            <MarkDown source={Seohun} />
            <MarkDown source={Introduction} />
          </Description>
        </ContentContainer>
      ) : (
        <ContentContainer>
          <Loader />
          <Img onLoad={onLoadedImg} src={photoSrc} loaded={loaded} />
        </ContentContainer>
      )}
    </Container>
  );
};

export default Content;
