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
`;

const Navigator = () => {
  return (
    <NavContainer>
      <Profile />
      <DropDown />
    </NavContainer>
  );
};

export default Navigator;
