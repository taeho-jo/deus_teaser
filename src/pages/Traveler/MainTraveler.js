import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import TravelerLayout from "../../components/Layout/TravelerLayout";
import Top from "../../components/Main/Top";
import Vid from "../../components/Main/Vid";
import Mid from "../../components/Main/Mid";
import SecondMid from "../../components/Main/SecondMid";
import InfoBox from "../../components/Main/InfoBox";
import Contact from "../../components/Main/Contact";
import NextPage from "../../components/Main/NextPage";
import Footer from "../../components/Main/Footer";
import FixedBar from "../../components/FixedBar";
import Modal from "../../components/Modal/Modal";
import fetchAPI from "../../Utils/fetch";

import ready from "../../images/ready_img.jpg";
import partner from "../../images/head_img_partner.jpg";
import error from "../../images/error.png";
import firstImg from "../../images/first_img.jpg";
import check from "../../images/check.png";
import LogoImg from "../../images/logo.svg";

const MainTraveler = ({ t, history }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState(null);
  const [traveller, setTraveller] = useState(1);
  const [provier, setProvider] = useState(0);

  // let history = useHistory();
  const movePage = () => {
    history.push("/partner");
  };

  const submit = () => {
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
    }
    setEmail("");
  };

  const changeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
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
      <TravelerLayout
        LogoImg={LogoImg}
        onClick={movePage}
        text={t("bePartner")}
      />
      <Top
        firsTitle={t("mainTitle")}
        secondTitle={t("mainTitle.2")}
        subTitle={t("mainSubTitle")}
        content={t("mainContent")}
      />
      <Vid />
      <Mid
        firstTitle={t("midTitle")}
        secondTitle={t("midSecondTitle")}
        subTitle={t("midSubTitle")}
        content={t("content")}
        firstContent={t("firstContent")}
        secondContent={t("secondContent")}
        background={firstImg}
      />
      <SecondMid />
      <InfoBox />
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
        partner={partner}
        title={t("bePartner")}
        content={t("join")}
        button={t("joinPartner")}
      />
      <Footer href={movePage} text={t("bePartner")} />
      <FixedBar onChange={changeEmail} onClick={submit} />
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

export default withTranslation()(withRouter(MainTraveler));
