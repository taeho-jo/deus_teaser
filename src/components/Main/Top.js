import React from "react";
import styled from "styled-components";

const Top = ({ firsTitle, secondTitle, subTitle, content, color }) => {
  return (
    <>
      <Container>
        <Title color={color}>
          {firsTitle}
          <br />
          {secondTitle}
        </Title>
        <SubTitle>{subTitle}</SubTitle>
        <P color={color}>{content}</P>
      </Container>
    </>
  );
};

export default Top;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 60px 60px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${props => props.color};
  font-size: 50px;
  line-height: 70px;
  font-family: "visbyHeavy";
  font-weight: bold;
  letter-spacing: normal;
`;

const SubTitle = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #00a3c8;
  font-size: 20px;
  letter-spacing: normal;
`;

const P = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  letter-spacing: normal;
  color: ${props => props.color};
  /* line-height: 30px; */
`;
