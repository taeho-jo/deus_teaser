import React from "react";
import styled from "styled-components";
import Inputs from "./Contact/Inputs";
import { withTranslation } from "react-i18next";

const Contact = ({ t }) => {
  return (
    <Container>
      <MainContainer>
        <Div>
          <TitleBox>
            <Title>{t("contact")}</Title>
            <Content>{t("contactText")}</Content>
          </TitleBox>
          <InputBox>
            <Inputs />
          </InputBox>
        </Div>
      </MainContainer>
    </Container>
  );
};

export default withTranslation()(Contact);

const Container = styled.div`
  width: 100%;
  background-color: #f9fafa;
  margin-top: 60px;
  padding-bottom: 60px;
`;

const MainContainer = styled.div`
  /* width: 100%;
  max-width: 1100px; */
  justify-content: center;
  /* border: 1px solid salmon; */
  display: flex;
  padding-top: 60px;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  /* border: 1px solid salmon; */
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;

const TitleBox = styled.div`
  /* border: 1px solid blue; */
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
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
  @media (max-width: 1024px) {
    margin-top: 30px;
    width: 100%;
  }
`;
