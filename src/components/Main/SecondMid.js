import React from "react";
import styled from "styled-components";
import phone from "../../images/phone_img.png";
import SecondMidText from "./SecondMidText/SecondMidText";

const SecondMid = () => {
  return (
    <Container>
      <SecondMidText
        content="Usually, finding adveture travel online is not easy. Also, the price
        and quality can not be expected."
        content1="DeusAdventures prepares the required elements and providers for Adventure Travels around the world. You adventurers can just sit back and relax."
        content2="DeusAdventures supervise whole product, travel plans, and transactions which is everything you are worrying about.
        We assure you that Price Tranparency and Guaranteed Quality is strength of us."
      />
      <ImageBox />
    </Container>
  );
};

export default SecondMid;

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
