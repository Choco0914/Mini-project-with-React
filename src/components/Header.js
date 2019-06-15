import React from "react";
import styled from "styled-components";

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
const Title = styled.span`
  margin-left: 250px;
`;

const Header = () => {
  return (
    <HomeTitle>
      <MenuButton className="fas fa-bars" />
      <Title>허정호님의 홈페이지</Title>
    </HomeTitle>
  );
};

export default Header;
