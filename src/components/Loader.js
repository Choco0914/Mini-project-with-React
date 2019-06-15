import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  align-self: center;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clock = styled.div``;

const Loader = () => {
  return (
    <Loading>
      <Clock>
        <span role="img" aria-label="clock">
          ⏰
        </span>
      </Clock>
    </Loading>
  );
};

export default Loader;
