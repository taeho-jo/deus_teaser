import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const SecondMidText = ({ content, content1, content2, t }) => {
  return (
    <>
      <MainContainer>
        <Div>
          <TitleBox>
            <Title>
              {t("findingAdventures")}&nbsp;
              <ColorTitle>{t("findingAdventures2")}</ColorTitle>
            </Title>
            <Content>{content}</Content>
          </TitleBox>
          <Inside />
        </Div>
      </MainContainer>
      <MainContainer marginTop="60px">
        <Div>
          <TitleBox>
            <Title>
              {t("readyAdventures")}&nbsp;
              <ColorTitle>
                {t("readyAdventures2")}&nbsp;
                {t("readyAdventures3")}
              </ColorTitle>
            </Title>
            <Content>{content1}</Content>
          </TitleBox>
          <Inside />
        </Div>
      </MainContainer>
      <MainContainer marginTop="60px">
        <Div>
          <TitleBox>
            <ColorTitle>
              {t("lowPrice")}
              <Title>{t("lowPrice2")}</Title>
            </ColorTitle>
            <Content>{content2}</Content>
          </TitleBox>
        </Div>
      </MainContainer>
    </>
  );
};

export default withTranslation()(SecondMidText);

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  /* @media (max-width: 414px) {
    padding:
  } */
`;
const TitleBox = styled.div`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Title = styled.span`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  vertical-align: baseline;
  letter-spacing: normal;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const ColorTitle = styled(Title)`
  color: #00a3c8;
`;
const Content = styled.p`
  width: 50%;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  margin-left: 100px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: normal;
  vertical-align: baseline;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`;
const Inside = styled.div`
  background: #585b5d;
  width: 150px;
  height: 1px;
  margin-top: 60px;
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
`;
