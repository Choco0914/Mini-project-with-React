import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";
import Content from "./Content";

const HomeContainer = styled.div`
  height: 100%;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Home = ({
  indActivist,
  onSelectedItem,
  selectedItem,
  loaded,
  onLoadedImg,
  clicked,
  onClicked
}) => {
  return (
    <HomeContainer id="home">
      <Header onClicked={onClicked} clicked={clicked} />
      <BodyContainer>
        <Navigator
          clicked={clicked}
          onSelectedItem={onSelectedItem}
          indActivist={indActivist}
          onClicked={onClicked}
        />
        <Content
          loaded={loaded}
          selectedItem={selectedItem}
          indActivist={indActivist}
          onLoadedImg={onLoadedImg}
          clicked={clicked}
        />
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
