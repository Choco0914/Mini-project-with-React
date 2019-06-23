import React from "react";
import Store from "./store";
import MarkDown from "react-markdown";
import styled from "styled-components";
import Loader from "./Loader";
import { createFrom } from "utils";

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

const Content = () => {
  return (
    <Store.Consumer>
      {store => {
        const {
            clicked,
            onLoadedImg,
            indActivist,
            loaded,
            selectedItem
          } = store,
          { photoSrc } = indActivist[selectedItem];
        const form = createFrom(indActivist, selectedItem);
        return (
          <Container clicked={clicked}>
            {loaded ? (
              <ContentContainer>
                <Img onLoad={onLoadedImg} src={photoSrc} loaded={loaded} />
                <Description>
                  <MarkDown source={form.name} />
                  <MarkDown source={form.hungyeog} />
                  <MarkDown source={form.seohun} />
                  <MarkDown source={form.introduction} />
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
      }}
    </Store.Consumer>
  );
};

export default Content;
