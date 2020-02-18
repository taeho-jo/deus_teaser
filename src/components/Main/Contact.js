import React from "react";
import styled from "styled-components";
import Inputs from "./Contact/Inputs";

const Contact = () => {
  return (
    <Container>
      <MainContainer>
        <TitleBox>
          <Title>Contact</Title>
          <Content>
            Feel free to get in touch with us, if you have any question.
          </Content>
        </TitleBox>
        <InputBox>
          <Inputs />
        </InputBox>
      </MainContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  background-color: #f9fafa;
  margin-top: 60px;
  padding-bottom: 60px;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* border: 1px solid salmon; */
  display: flex;
  padding-top: 60px;
`;

const TitleBox = styled.div`
  /* border: 1px solid blue; */
  width: 50%;
`;
const Title = styled.h1`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  letter-spacing: normal;
`;
const Content = styled.p`
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  margin-top: 20px;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
`;
const InputBox = styled.div`
  width: 50%;
  /* border: 1px solid darkgreen; */
`;
