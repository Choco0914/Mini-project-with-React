import React, { Component } from "react";
import MarkDown from "react-markdown";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  position: ${props => (props.clicked ? "static" : "absolute")};
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow: scroll;
  height: 100%;
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Img = styled.img`
  display: ${props => (props.loaded ? "block" : "none")};
  align-self: center;
  width: 110px;
  top: 0;
  position: sticky;
`;

const Description = styled.div`
  padding-bottom: 20px;
  p {
    width: 600px;
  }
`;

class Content extends Component {
  constructor(props) {
    super(props);

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.props.onLoadedImg);
  }

  componentDidUpdate() {
    this.imgRef.current.addEventListener("load", this.props.onLoadedImg);
  }

  render() {
    const { indActivist, selectedItem, loaded, clicked } = this.props;
    const { photoSrc } = indActivist[selectedItem];
    const Name = `# ${indActivist[selectedItem].name}`;
    const Hungyeog = `## 훈격\n\n* ${indActivist[selectedItem].hungyeog}`;
    const Seohun = `## 서훈년도\n\n* ${indActivist[selectedItem].seohun}`;
    const Introduction = `## 서문\n\n ${
      indActivist[selectedItem].introduction
    }`;
    return (
      <Container clicked={clicked}>
        {loaded ? (
          <ContentContainer>
            <Img ref={this.imgRef} src={photoSrc} loaded={loaded} />
            <Description>
              <MarkDown source={Name} />
              <MarkDown source={Hungyeog} />
              <MarkDown source={Seohun} />
              <MarkDown source={Introduction} />
            </Description>
          </ContentContainer>
        ) : (
          <ContentContainer>
            <Loader />
            <Img ref={this.imgRef} src={photoSrc} loaded={loaded} />
          </ContentContainer>
        )}
      </Container>
    );
  }
}

export default Content;
