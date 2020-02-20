import React from "react";
import styled from "styled-components";

const Top = ({ firsTitle, secondTitle, subTitle, content, color }) => {
  return (
    <>
      <Container>
        <Div>
          <Title color={color}>
            {firsTitle}
            <br />
            {secondTitle}
          </Title>
          <SubTitle>{subTitle}</SubTitle>
          <P color={color}>{content}</P>
        </Div>
      </Container>
    </>
  );
};

export default Top;

const Container = styled.div`
  padding: 60px 60px;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    padding: 60px 30px;
  }
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.h1`
  width: 100%;
  color: ${props => props.color};
  font-size: 50px;
  line-height: 70px;
  font-family: "visbyHeavy";
  font-weight: bold;
  letter-spacing: normal;
  @media (max-width: 414px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const SubTitle = styled.h2`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #00a3c8;
  font-size: 20px;
  letter-spacing: normal;
  @media (max-width: 414px) {
    font-size: 15px;
  }
`;

const P = styled.p`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  letter-spacing: normal;
  color: ${props => props.color};
  @media (max-width: 414px) {
    font-size: 12px;
  }
`;
