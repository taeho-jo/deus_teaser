import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../Modal/Modal";
import fetchAPI from "../../../Utils/fetch";
import error from "../../../images/error.png";
import check from "../../../images/check.png";

const Inputs = ({ marginTop }) => {
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
    setName(null);
    setPhoneNumber(null);
    setEmail(null);
    setContent(null);
  };

  const submit = () => {
    if (name === null || email === null || content === null) {
      setIsError(true);
    } else {
      fetchAPI("http://172.20.10.7:8000/user/contact", {
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
      }).then(res => {
        if (res.message === "SUCCESS") {
          setIsClicked(true);
        } else {
          setIsError(true);
        }
      });
    }
    setName("");
    setPhoneNumber("");
    setEmail("");
    setContent("");
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
        <InputName marginTop={marginTop}>Name</InputName>

        <Input
          value={name}
          onChange={changeName}
          placeholder="Your Name..."
        ></Input>

        <InputName marginTop="30px">Phone Number</InputName>
        <Input
          value={phoneNumber}
          onChange={changePhoneNumber}
          placeholder="Your Phone Number..."
        ></Input>

        <InputName marginTop="30px">Email</InputName>
        <Input
          value={email}
          onChange={changeEmaill}
          placeholder="Your Email Address..."
        ></Input>

        <InputName marginTop="30px">Content</InputName>
        <TextArea value={content} onChange={changeContent} />
        <Button onClick={submit}>Send a Message</Button>
      </Container>
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

export default Inputs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputName = styled.p`
  margin-bottom: 15px;
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: ${props => props.marginTop};
`;

const Input = styled.input`
  width: 520px;
  padding: 15px;
  border: 1px solid #ebeded;
  border-radius: 5px;
  outline: #00a3c8;
  :focus {
    border: 1px solid #00a3c8;
    transition: border 0.3s ease-in-out;
  }

  ::placeholder {
    font-size: 13px;
  }
`;

const TextArea = styled.textarea`
  /* margin-top: 30px; */
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
`;

const Button = styled.button`
  padding: 20px;
  color: #fff;
  background: #00a3c8;
  border-radius: 5px;
  font-size: 15px;
  margin: 30px auto 0;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background: #005a6f;
    transition: 0.4s ease-in-out;
  }
`;