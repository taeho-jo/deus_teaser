import React from "react";
import styled from "styled-components";
import TravelerLayout from "../../components/Layout/TravelerLayout";
import LogoImg from "../../images/logo_white.svg";
import Top from "../../components/Main/Top";
import background from "../../images/head_img_partner.jpg";
import PartnerSecondMidText from "../../components/Main/SecondMidText/PartnerSecondMid";
import PartnerInfoBox from "../../components/Main/PartnerInfoBox";
import Contact from "../../components/Main/Contact";
import Mid from "../../components/Main/Mid";
import ready from "../../images/ready_img.jpg";
import NextPage from "../../components/Main/NextPage";
import traveler from "../../images/head_img_partner2.jpg";
import Footer from "../../components/Main/Footer";
import FixedBar from "../../components/FixedBar";

const MainPartner = () => {
  return (
    <>
      <Div>
        <TravelerLayout
          color="#ffffff"
          LogoImg={LogoImg}
          text="Are you a traveler?"
        />
        <Top
          color="#ffffff"
          firsTitle="Travelers does create their own plan."
          subTitle="Free individual travelers grow fast"
          content="Travelers thesedays eager to create and choose their own travel plan."
        />
      </Div>
      <PartnerSecondMidText content="Since there are a lot of people who are searching products through online and moible, middlemens are disappearing thesedays. you can meet your customers aroun the world directly with DeusAdventures." />
      <PartnerInfoBox />
      <Contact />
      <Mid
        firstTitle="So are you ready?"
        subTitle="Be ready for great adventures!"
        content="Through the various travel plans and products from DeusAdventures,"
        firstContent="Do access your own trip with confidence."
        background={ready}
      />
      <NextPage
        partner={traveler}
        title="Are you a traveler?"
        content="Join us for a greater journey!"
        button="I'm a traveler"
      />
      <Footer text="Are you a traveler?" />
      <FixedBar />
    </>
  );
};

export default MainPartner;

const Div = styled.div`
  height: 500px;
  /* width: 100%; */
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
