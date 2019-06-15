import React from "react";
import styled from "styled-components";
import List from "./List";

const Container = styled.div`
  height: 30%;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.ul`
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  cursor: pointer;
  width: 100%;
`;
const Title = styled.span``;
const Icon = styled.i``;

const DropDown = ({ indActivist, onSelectedItem }) => {
  return (
    <Container>
      <TitleContainer>
        <Icon className="fas fa-clipboard-list" />
        <Title>독립운동가</Title>
        <Icon className="fas fa-sort-down" />
      </TitleContainer>
      <ContentContainer>
        {indActivist.map((item, index) => (
          <List
            key={index}
            id={index}
            item={item}
            onSelectedItem={onSelectedItem}
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default DropDown;