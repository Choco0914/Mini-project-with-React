import React from "react";
import styled from "styled-components";

const ProContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60%;
`;
const UserImg = styled.img`
  max-height: 70px;
  max-width: 70px;
  border-radius: 50%;
`;

const UserName = styled.span``;

const Profile = () => {
  return (
    <ProContainer>
      <UserImg src="https://avatars2.githubusercontent.com/u/39004543?s=460&v=4" />
      <UserName>UserName</UserName>
    </ProContainer>
  );
};

export default Profile;
