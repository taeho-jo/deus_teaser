import React from "react";
import styled from "styled-components";

const Mid = ({
  firstTitle,
  secondTitle,
  subTitle,
  content,
  firstContent,
  secondContent,
  background
}) => {
  return (
    <Container>
      <Div>
        <TextContainer>
          <Title>
            {firstTitle}
            <br />
            {secondTitle}
          </Title>
          <SubTitle>{subTitle}</SubTitle>
          <Content>
            {content}
            {/* <br /> */}
            {firstContent}
            <br />
            {secondContent}
          </Content>
        </TextContainer>
        <ImageContainer background={background} />
      </Div>
    </Container>
  );
};

export default Mid;

const Container = styled.div`
  /* border: 1px solid red; */
  padding: 60px 60px;
  display: flex;
  /* max-width: 1100px; */
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 60px 30px;
  }
`;

const Div = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  max-width: 1100px;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    /* border: 2px solid orange; */
  }
`;

const TextContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 50%;
  /* border: 1px solid black; */
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 50px;
  letter-spacing: normal;
  font-family: visbyHeavy;
  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: 50px;
    line-height: 70px;
    font-family: "visbyHeavy";
    font-weight: bold;
    letter-spacing: normal;
  }
`;
const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 20px 0;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
  @media (max-width: 1024px) {
  }
`;
const Content = styled.p`
  font-size: 15px;
  line-height: 30px;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 450px;
  margin-left: 100px;
  /* border: 1px solid black; */
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* border: 1px solid green; */
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    background-position: center center;
    margin-top: 20px;
  }
`;
