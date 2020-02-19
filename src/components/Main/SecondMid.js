import React from "react";
import styled from "styled-components";
import phone from "../../images/phone_img.png";
import SecondMidText from "./SecondMidText/SecondMidText";
import { withTranslation } from "react-i18next";

const SecondMid = ({ t }) => {
  return (
    <Container>
      <SecondMidText
        content={t("content2")}
        content1={t("content3")}
        content2={t("content4")}
      />
      <ImageBox />
    </Container>
  );
};

export default withTranslation()(SecondMid);

const Container = styled.div`
  background-color: #28292a;
  width: 100%;
  padding: 60px 0 0 0;
`;

const ImageBox = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 675px;
  height: 436.35px;
  margin: 60px auto;
`;
