import React, { useEffect, useState } from "react";
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
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import error from "../../images/error.png";
import fetchAPI from "../../Utils/fetch";
import check from "../../images/check.png";

const MainPartner = ({ t }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState(null);
  const [traveller, setTraveller] = useState(1);
  const [provier, setProvider] = useState(0);

  let history = useHistory();
  const movePage = () => {
    history.push("/");
  };

  const submited = () => {
    if (email === null) {
      setIsError(true);
    } else {
      fetchAPI("http://10.58.0.131:8000/user/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          is_supplier: provier,
          is_traveler: traveller
        })
      }).then(res => {
        if (res.message === "SUCCESS") {
          setIsClicked(true);
        } else {
          setIsError(true);
        }
      });
      setEmail("");
    }
  };

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const closed = () => {
    setEmail(null);
    setIsClicked(false);
    setIsError(false);
  };

  useEffect(() => {
    const url = window.location.href;
    if (url === "http://localhost:3000/") {
      setTraveller(1);
      setProvider(0);
    } else {
      setTraveller(0);
      setProvider(1);
    }
  }, []);
  return (
    <>
      <Div>
        <TravelerLayout
          onClick={movePage}
          color="#ffffff"
          LogoImg={LogoImg}
          text={t("areyoutraveler")}
        />
        <Top
          color="#ffffff"
          firsTitle={t("own")}
          subTitle={t("freetraveler")}
          content={t("maketrip")}
        />
      </Div>
      <PartnerSecondMidText content={t("partnerContent")} />
      <PartnerInfoBox />
      <Contact />
      <Mid
        firstTitle={t("ready")}
        subTitle={t("readyAdv")}
        content={t("readyText")}
        firstContent={t("readyText2")}
        background={ready}
      />
      <NextPage
        partner={traveler}
        title={t("areyoutraveler")}
        content={t("join")}
        button={t("iamtraveler")}
      />
      <Footer text={t("areyoutraveler")} />
      <FixedBar onChange={changeEmail} onClick={submited} />
      {isClicked && (
        <Modal
          error="Completed"
          color="#00ace6;"
          please="Your question has been forwarded"
          background={check}
          onClick={closed}
        />
      )}
      {isError && (
        <Modal
          error="Error"
          color="#e60000"
          please="
          Please check again"
          background={error}
          onClick={closed}
        />
      )}
    </>
  );
};

export default withTranslation()(MainPartner);

const Div = styled.div`
  height: 500px;
  /* width: 100%; */
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
