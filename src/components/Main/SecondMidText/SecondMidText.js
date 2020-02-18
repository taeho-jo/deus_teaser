import React from "react";
import styled from "styled-components";

const SecondMidText = ({ content, content1, content2 }) => {
  return (
    <>
      <MainContainer>
        <TitleBox>
          <Title>Finding a adventure travel is</Title>
          <br />
          <ColorTitle>not difficult anymore.</ColorTitle>
        </TitleBox>
        <Content>{content}</Content>
        <Inside />
      </MainContainer>
      <MainContainer marginTop="60px">
        <TitleBox>
          <Title>DeusAdventures is </Title>
          <ColorTitle>ready for</ColorTitle>
          <br />
          <ColorTitle>not difficult anymore.</ColorTitle>
        </TitleBox>
        <Content>{content1}</Content>
        <Inside />
      </MainContainer>
      <MainContainer marginTop="60px">
        <TitleBox>
          <ColorTitle>Low price, best quality</ColorTitle>
          <br />
          <Title>guaranteed by us.</Title>
        </TitleBox>
        <Content>{content2}</Content>
      </MainContainer>
    </>
  );
};

export default SecondMidText;

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
