import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const NavContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  height: 100%;
  width: 300px;
  background-color: #2f3640;
  color: #ecf0f1;
`;

const Navigator = () => {
  return (
    <NavContainer>
      <Profile />
    </NavContainer>
  );
};

export default Navigator;
