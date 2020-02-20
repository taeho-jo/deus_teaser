import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import Box from "./InfoBox/Box";

import icon1 from "../../images/pros_ico1.svg";
import icon2 from "../../images/pros_ico2.svg";
import icon3 from "../../images/pros_ico3.svg";
import icon4 from "../../images/pros_ico4.svg";

const InfoBox = ({ t }) => {
  return (
    <Container>
      <Div>
        <Box width="220px" url={icon1} text={t("info1")} />
        <Box width="220px" url={icon2} text={t("info2")} />
        <Box width="220px" url={icon3} text={t("info3")} />
        <Box width="220px" url={icon4} text={t("info4")} />
      </Div>
    </Container>
  );
};

export default withTranslation()(InfoBox);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;
