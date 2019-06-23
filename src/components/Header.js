import React from "react";
import styled from "styled-components";
import Store from "./store";

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  color: #ecf0f1;
  background-color: #2f3640;
`;
const MenuButton = styled.i`
  position: absolute;
  left: 2%;
  cursor: pointer;
`;

const CheckContainer = styled.div`
  transition: 5s ease-in-out;
  display: ${props => (props.clicked ? "none" : "block")};
`;

const Title = styled.span`
  margin-left: 250px;
`;

const Header = () => {
  return (
    <Store.Consumer>
      {store => {
        const { clicked, onClicked } = store;
        return (
          <HomeTitle>
            <CheckContainer onClick={onClicked} clicked={clicked}>
              <MenuButton className="fas fa-bars" />
            </CheckContainer>
            <Title>허정호님의 홈페이지</Title>
          </HomeTitle>
        );
      }}
    </Store.Consumer>
  );
};

export default Header;
