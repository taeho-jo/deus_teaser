import React from "react";
import styled from "styled-components";
import Box from "./InfoBox/Box";
import icon1 from "../../images/pros_ico1.svg";
import icon2 from "../../images/pros_ico2.svg";
import icon3 from "../../images/pros_ico3.svg";
import icon4 from "../../images/pros_ico4.svg";

const InfoBox = () => {
  return (
    <Container>
      <Box width="220px" url={icon1} text="Trusted travel plans and products" />
      <Box width="220px" url={icon2} text="The lowest price guaranteed" />
      <Box width="220px" url={icon3} text="Multilingual customer care" />
      <Box width="220px" url={icon4} text="24 hour cancellation policy" />
    </Container>
  );
};

export default InfoBox;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
