import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import Modal from "../../Modal/Modal";
import fetchAPI from "../../../Utils/fetch";

import error from "../../../images/error.png";
import check from "../../../images/check.png";

const Inputs = ({ marginTop, t }) => {
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [content, setContent] = useState(null);
  const [traveller, setTraveller] = useState(1);
  const [provier, setProvider] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);

  const changeName = e => {
    setName(e.target.value);
  };
  const changePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };
  const changeEmaill = e => {
    setEmail(e.target.value);
  };
  const changeContent = e => {
    setContent(e.target.value);
  };

  const closed = () => {
    setIsClicked(false);
    setIsError(false);
  };

  const submit = () => {
    if (name === null || email === null || content === null) {
      setIsError(true);
    } else {
      fetchAPI("http://52.79.234.43:8000/user/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          phone_number: phoneNumber,
          email: email,
          content: content,
          is_supplier: provier,
          is_traveler: traveller
        })
      })
        .then(res => {
          if (res.message === "SUCCESS") {
            setIsClicked(true);
            setName("");
            setPhoneNumber("");
            setEmail("");
            setContent("");
          } else {
            setIsError(true);
          }
        })
        .catch(error => {
          console.log(error.message);
        });
    }
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
      <Container>
        <InputName marginTop={marginTop}>{t("name")}</InputName>
        <Input
          value={name}
          onChange={changeName}
          placeholder={t("namePlaceholder")}
        />

        <InputName marginTop="30px">{t("phone")}</InputName>
        <Input
          type="number"
          value={phoneNumber}
          onChange={changePhoneNumber}
          placeholder={t("phonePlaceholder")}
        />

        <InputName marginTop="30px">{t("email")}</InputName>
        <Input
          type="email"
          value={email}
          onChange={changeEmaill}
          placeholder={t("emailPlaceholder")}
        />

        <InputName marginTop="30px">{t("contentText")}</InputName>
        <TextArea value={content} onChange={changeContent} />
        <Button onClick={submit}>{t("sendMsg")}</Button>
      </Container>
      {isClicked && (
        <Modal
          error="Completed"
          color="#00ace6;"
          please={t("contactMessage")}
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

export default withTranslation()(Inputs);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputName = styled.p`
  margin-bottom: 15px;
  margin-top: ${props => props.marginTop};
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Input = styled.input`
  width: 520px;
  border: 1px solid #ebeded;
  border-radius: 5px;
  padding: 15px;
  outline: #00a3c8;
  :focus {
    border: 1px solid #00a3c8;
    transition: border 0.3s ease-in-out;
  }
  ::placeholder {
    font-size: 13px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const TextArea = styled.textarea`
  width: 520px;
  height: 200px;
  border: 1px solid #ebeded;
  border-radius: 5px;
  padding: 15px;
  outline: #00a3c8;
  resize: none;
  :focus {
    border: 1px solid #00a3c8;
    transition: border 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  padding: 20px;
  margin: 30px auto 0;
  background: #00a3c8;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  :hover {
    background: #005a6f;
    transition: 0.4s ease-in-out;
  }
`;
