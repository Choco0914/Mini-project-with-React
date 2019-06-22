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

const List = ({ id, item, onSelectedItem }) => {
  return (
    <ContentItem id={id} onClick={onSelectedItem}>
      <Icon className="fas fa-clipboard-list" id={id} />
      {item.name}
    </ContentItem>
  );
};

export default List;
