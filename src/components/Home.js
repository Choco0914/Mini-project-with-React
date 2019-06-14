import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";

const HomeContainer = styled.div`
  height: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Navigator />
    </HomeContainer>
  );
};

export default Home;
