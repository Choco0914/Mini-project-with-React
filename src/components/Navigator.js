import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import DropDown from "./DropDown";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  width: 300px;
  background-color: #2f3640;
  color: #ecf0f1;
  position: relative;
`;

const CloseBtn = styled.div`
  width: 60%;
  position: absolute;
  align-self: center;
  bottom: 10%;
  background-color: #487eb0;
  border-radius: 5px;
  padding: 10px;
  color: #dcdde1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Navigator = () => {
  return (
    <NavContainer>
      <Profile />
      <DropDown />
      <CloseBtn>메뉴 닫기</CloseBtn>
    </NavContainer>
  );
};

export default Navigator;
