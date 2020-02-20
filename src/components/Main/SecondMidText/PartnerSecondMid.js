import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import phone from "../../../images/phone_img.png";

const PartnerSecondMidText = ({ content, t }) => {
  return (
    <Container>
      <MainContainer>
        <Div>
          <TitleBox>
            <Title>
              {t("middlemen")}&nbsp;
              <ColorTitle>{t("disappearing")}</ColorTitle>
            </Title>
            <Content>{content}</Content>
          </TitleBox>
        </Div>
      </MainContainer>
      <ImageBox />
    </Container>
  );
};

export default withTranslation()(PartnerSecondMidText);

const Container = styled.div`
  background-color: #28292a;
  padding: 60px 0 0 0;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
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

const ImageBox = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 675px;
  height: 436.35px;
  margin: 60px auto;
`;
