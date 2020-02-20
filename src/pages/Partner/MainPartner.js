import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import TravelerLayout from "../../components/Layout/TravelerLayout";
import Top from "../../components/Main/Top";
import Mid from "../../components/Main/Mid";
import PartnerSecondMidText from "../../components/Main/SecondMidText/PartnerSecondMid";
import PartnerInfoBox from "../../components/Main/PartnerInfoBox";
import Contact from "../../components/Main/Contact";
import NextPage from "../../components/Main/NextPage";
import Footer from "../../components/Main/Footer";
import FixedBar from "../../components/FixedBar";
import Modal from "../../components/Modal/Modal";
import fetchAPI from "../../Utils/fetch";

import traveler from "../../images/head_img_partner2.jpg";
import LogoImg from "../../images/logo_white.svg";
import background from "../../images/head_img_partner.jpg";
import ready from "../../images/ready_img.jpg";
import error from "../../images/error.png";
import check from "../../images/check.png";
import kor from "../../images/kor.png";
import usa from "../../images/usa.png";

const MainPartner = ({ t, i18n, history }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState(null);
  const [traveller, setTraveller] = useState(1);
  const [provier, setProvider] = useState(0);
  const [changeLang, setChangeLang] = useState("");

  useEffect(() => {
    window.localStorage.setItem("lang", changeLang);
  }, [changeLang]);

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

  const selectLang = () => {
    setChangeLang("ko");
    i18n.changeLanguage("ko-KR");
  };

  const originLang = () => {
    setChangeLang("en");
    i18n.changeLanguage("en-US");
  };

  const movePage = () => {
    history.push("/");
  };

  const submited = () => {
    if (email === null) {
      setIsError(true);
    } else {
      fetchAPI("http://52.79.234.43:8000/user/subscription", {
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
        <TravelerLayout LogoImg={LogoImg} text={t("areyoutraveler")}>
          <Lang left="-30px" lang={usa} alt="usa" onClick={originLang} />
          <Lang lang={kor} alt="kor" onClick={selectLang} />
          <MenuText>{t("subscribe")}</MenuText>
          <MenuText onClick={movePage}>{t("bePartner")}</MenuText>
        </TravelerLayout>
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
        href={movePage}
        partner={traveler}
        title={t("areyoutraveler")}
        content={t("join")}
        button={t("iamtraveler")}
      />
      <Footer href={movePage} text={t("areyoutraveler")} />
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

export default withTranslation()(withRouter(MainPartner));

const Div = styled.div`
  height: 500px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 414px) {
    heihgt: 300px;
    width: 100%;
    background-position: center center;
  }
`;
const Lang = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.lang});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: ${props => props.left};
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuText = styled.p`
  min-width: 150px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  text-align: center;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
  :hover {
    color: #00a3c8;
    transition: 0.2s ease-in-out;
  }
`;
