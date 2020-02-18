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
      <TextContainer>
        <Title>
          {firstTitle}
          <br />
          {secondTitle}
        </Title>
        <SubTitle>{subTitle}</SubTitle>
        <Content>
          {content}
          <br />
          {firstContent}
          <br />
          {secondContent}
        </Content>
      </TextContainer>
      <ImageContainer background={background} />
    </Container>
  );
};

export default Mid;

const Container = styled.div`
  /* border: 1px solid red; */
  padding: 60px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const TextContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 35px;
  line-height: 50px;
  letter-spacing: normal;
  font-family: visbyHeavy;
`;
const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 20px 0;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
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
`;
