import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const Footer = ({ href, text, t }) => {
  return (
    <Container>
      <Div>
        <LeftBox>
          <LeftContact>DeusAdventures. Inc.</LeftContact>
          <LeftContact>{t("email")} LeftContact@deusadventures.com</LeftContact>
          <LeftContact>{t("phone")}/WhatsApp +82 10 4729 9389</LeftContact>
        </LeftBox>
        <RightBox>
          <RightContact
            size="15px"
            pointer="pointer"
            color="#00a3c8"
            onClick={href}
          >
            {text}
          </RightContact>
          <RightContact size="13px;">
            2019 Deus Adventures © All Rights Reserved.
          </RightContact>
        </RightBox>
      </Div>
    </Container>
  );
};

export default withTranslation()(Footer);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  width: 50%;
  font-size: 13px;
  letter-spacing: normal;
  padding: 60px 0;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 15px 0;
  }
`;
const LeftContact = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  vertical-align: baseline;
  margin-top: 10px;
  letter-spacing: normal;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const RightBox = styled.div`
  width: 50%;
  padding: 60px 0;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 15px 0 50px 0;
  }
`;
const RightContact = styled.p`
  text-align: right;
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-size: ${props => props.size};
  cursor: ${props => props.pointer};
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: normal;
  margin-top: 10px;
  :hover {
    color: #025a6f;
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`;
