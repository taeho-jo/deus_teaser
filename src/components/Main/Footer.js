import React from "react";
import styled from "styled-components";

const Footer = ({ text }) => {
  return (
    <Container>
      <LeftBox>
        <LeftContact>DeusAdventures. Inc.</LeftContact>
        <LeftContact>Email LeftContact@deusadventures.com</LeftContact>
        <LeftContact>Call/WhatsApp +82 10 4729 9389</LeftContact>
      </LeftBox>
      <RightBox>
        <RightContact size="15px" color="#00a3c8" pointer="pointer">
          {text}
        </RightContact>
        <RightContact size="13px;">
          2019 Deus Adventures © All Rights Reserved.
        </RightContact>
      </RightBox>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
`;
const LeftBox = styled.div`
  width: 50%;
  font-size: 13px;
  letter-spacing: normal;
  padding: 60px 0;
`;
const LeftContact = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  vertical-align: baseline;
  margin-top: 10px;
`;

const RightBox = styled.div`
  width: 50%;
  padding: 60px 0;
`;
const RightContact = styled.p`
  text-align: right;
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: normal;
  margin-top: 10px;
  cursor: ${props => props.pointer};
`;
