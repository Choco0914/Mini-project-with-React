import React, { Component } from "react";
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

class List extends Component {
  constructor(props) {
    super(props);

    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.listRef.current.addEventListener("click", this.props.onSelectedItem);
  }

  render() {
    const { id, item } = this.props;
    const ref = this.listRef;
    return (
      <ContentItem id={id} ref={ref}>
        <Icon className="fas fa-clipboard-list" />
        {item.name}
      </ContentItem>
    );
  }
}

export default List;
