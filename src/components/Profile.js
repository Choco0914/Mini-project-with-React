import React from "react";
import styled from "styled-components";

const ProContainer = styled.div`
  height: 35%;
`;

const Content = styled.div`
  display: flex;
  margin-top: 20px;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`;

const UserImg = styled.img`
  max-height: 70px;
  max-width: 70px;
  border-radius: 50%;
  border: 6px solid #f5f6fa;
`;

const UserName = styled.span``;

const Profile = () => {
  return (
    <ProContainer>
      <Content>
        <UserImg src="https://avatars2.githubusercontent.com/u/39004543?s=460&v=4" />
        <UserName>허정호 님</UserName>
      </Content>
    </ProContainer>
  );
};

export default Profile;
