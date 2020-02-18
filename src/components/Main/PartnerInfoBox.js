import React from "react";
import styled from "styled-components";
import Box from "./InfoBox/Box";
import icon5 from "../../images/pros_ico5.svg";
import icon2 from "../../images/pros_ico2.svg";
import icon6 from "../../images/pros_ico6.svg";
import icon7 from "../../images/pros_ico7.svg";
import icon8 from "../../images/pros_ico8.svg";

const PartnerInfoBox = () => {
  return (
    <Container>
      <Box width="164px" url={icon5} text="Global Marketing" />
      <Box width="164px" url={icon2} text="Multilingual customer support" />
      <Box width="164px" url={icon6} text="Automated Reservation Management" />
      <Box
        width="164px"
        url={icon7}
        text="Real-time customer care service through online"
      />
      <Box width="164px" url={icon8} text="Simplified Payout System" />
    </Container>
  );
};

export default PartnerInfoBox;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
