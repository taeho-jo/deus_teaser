import React from "react";
import styled from "styled-components";
import phone from "../../../images/phone_img.png";

const PartnerSecondMidText = ({ content }) => {
  return (
    <Container>
      <MainContainer>
        <TitleBox>
          <ColorTitle>Middlemens </ColorTitle>
          <Title>are</Title>
          <ColorTitle>disappearing</ColorTitle>
          <br />
          <Title>thesedays.</Title>
        </TitleBox>
        <Content>{content}</Content>
      </MainContainer>
      <ImageBox />
    </Container>
  );
};

export default PartnerSecondMidText;

const Container = styled.div`
  background-color: #28292a;
  width: 100%;
  padding: 60px 0 0 0;
`;

const MainContainer = styled.div`
  /* border: 1px solid white; */
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${props => props.marginTop};
`;
const TitleBox = styled.div`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
`;
const Title = styled.span`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  vertical-align: baseline;
  letter-spacing: normal;
`;
const ColorTitle = styled(Title)`
  color: #00a3c8;
`;
const Content = styled.p`
  width: 500px;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  margin-left: 100px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: normal;
  vertical-align: baseline;
`;
const Inside = styled.div`
  background: #585b5d;
  width: 150px;
  height: 1px;
  margin-top: 60px;
`;

const ImageBox = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 675px;
  height: 436.35px;
  margin: 60px auto;
`;
