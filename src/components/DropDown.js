import React from "react";
import styled from "styled-components";
import List from "./List";
import Stroe from "./store";

const Container = styled.div`
  height: 30%;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.ul`
  display: ${props => (props.selected ? "block" : "none")};
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

const DropDown = () => {
  return (
    <Stroe.Consumer>
      {store => {
        const { onSelected, selected, indActivist, onSelectedItem } = store;
        return (
          <Container>
            <TitleContainer onClick={onSelected}>
              <Icon className="fas fa-clipboard-list" />
              <Title>독립운동가</Title>
              <Icon className="fas fa-sort-down" />
            </TitleContainer>
            <ContentContainer selected={selected}>
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
      }}
    </Stroe.Consumer>
  );
};

export default DropDown;
