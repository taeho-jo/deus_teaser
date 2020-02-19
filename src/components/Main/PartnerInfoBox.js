import React from "react";
import styled from "styled-components";
import Box from "./InfoBox/Box";
import icon5 from "../../images/pros_ico5.svg";
import icon2 from "../../images/pros_ico2.svg";
import icon6 from "../../images/pros_ico6.svg";
import icon7 from "../../images/pros_ico7.svg";
import icon8 from "../../images/pros_ico8.svg";
import { withTranslation } from "react-i18next";

const PartnerInfoBox = ({ t }) => {
  return (
    <Container>
      <Div>
        <Box width="164px" url={icon5} text={t("icon5")} />
        <Box width="164px" url={icon2} text={t("icon6")} />
        <Box width="164px" url={icon6} text={t("icon7")} />
        <Box width="164px" url={icon7} text={t("icon8")} />
        <Box width="164px" url={icon8} text={t("icon9")} />
      </Div>
    </Container>
  );
};

export default withTranslation()(PartnerInfoBox);

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid orange; */
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid orange; */
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;

// const Container = styled.div`
//   width: 100%;
//   max-width: 1100px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
// `;
