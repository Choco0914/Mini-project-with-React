import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  position: absolute;
  left: 10%;
`;

const ContentItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

const List = () => {
  return (
    <ContentItem>
      <Icon className="fas fa-clipboard-list" />
      첫번째
    </ContentItem>
  );
};

export default List;
