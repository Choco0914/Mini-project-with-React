import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  position: absolute;
  left: 25%;
`;

const ContentItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
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
