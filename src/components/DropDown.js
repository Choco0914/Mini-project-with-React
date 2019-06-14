import React from "react";
import styled from "styled-components";
import List from "./List";

const Container = styled.div`
  display: flex;
  height: 35%;
  flex-direction: column;
`;

const ContentContainer = styled.ul`
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  cursor: pointer;
`;
const Title = styled.span``;
const Icon = styled.i``;

const DropDown = () => {
  return (
    <Container>
      <TitleContainer>
        <Icon className="fas fa-clipboard-list" />
        <Title>독립운동가</Title>
        <Icon className="fas fa-sort-down" />
      </TitleContainer>
      <ContentContainer>
        <List />
      </ContentContainer>
    </Container>
  );
};

export default DropDown;
