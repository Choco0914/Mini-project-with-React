import React from "react";
import MarkDown from "react-markdown";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow: scroll;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`;

const Img = styled.img`
  align-self: center;
  width: 110px;
  top: 0;
  position: sticky;
`;

const input =
  "# This is a header\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph\n\n ## And this is a paragraph";

const Content = () => {
  return (
    <Container>
      <ContentContainer>
        <Img src="http://e-gonghun.mpva.go.kr/hise/ua/getImage.do?mngNo=8862&type=CH" />
        <MarkDown source={input} />
      </ContentContainer>
    </Container>
  );
};

export default Content;
