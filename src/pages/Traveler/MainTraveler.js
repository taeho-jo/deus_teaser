import React, { useState, useEffect } from "react";
import TravelerLayout from "../../components/Layout/TravelerLayout";
import Top from "../../components/Main/Top";
import Mid from "../../components/Main/Mid";
import Vid from "../../components/Main/Vid";
import SecondMid from "../../components/Main/SecondMid";
import InfoBox from "../../components/Main/InfoBox";
import Contact from "../../components/Main/Contact";
import firstImg from "../../images/first_img.jpg";
import ready from "../../images/ready_img.jpg";
import NextPage from "../../components/Main/NextPage";
import partner from "../../images/head_img_partner.jpg";
import Footer from "../../components/Main/Footer";
import FixedBar from "../../components/FixedBar";
import Modal from "../../components/Modal/Modal";
import fetchAPI from "../../Utils/fetch";
import error from "../../images/error.png";
import check from "../../images/check.png";
import LogoImg from "../../images/logo.svg";

import { useHistory } from "react-router-dom";

const MainTraveler = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState(null);
  const [traveller, setTraveller] = useState(1);
  const [provier, setProvider] = useState(0);

  const submit = () => {
    if (email === null) {
      setIsError(true);
    } else {
      fetchAPI("http://_____________________", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          is_provider: provier,
          is_traveller: traveller
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
  let history = useHistory();
  const movePage = () => {
    history.push("/partner");
  };

  return (
    <>
      <TravelerLayout
        LogoImg={LogoImg}
        onClick={movePage}
        text="Be a Partner"
      />
      <Top
        firsTitle="There are hundreds of challenges"
        secondTitle="around our lives."
        subTitle="Well, life is short, isn't it?"
        content="DeusAdventures is giving an effort to encourage more people to have
          better and bold adventures."
      />
      <Vid />
      <Mid
        firstTitle="Dreaming of Adventures?"
        secondTitle="You are right to be here!"
        subTitle="But it is not as easy as you think to prepare"
        content="Get a hint from DeusAdventures' travel plans which have been proven"
        firstContent="by thousands of real travels."
        secondContent="It will be just perfect travel even if you just follows our presets."
        background={firstImg}
      />
      <SecondMid />
      <InfoBox />
      <Contact />
      <Mid
        firstTitle="So are you ready?"
        subTitle="Be ready for great adventures!"
        content="Through the various travel plans and products from DeusAdventures,"
        firstContent="Do access your own trip with confidence."
        background={ready}
      />
      <NextPage
        partner={partner}
        title="Be a Partner"
        content="Join us for a greater journey!"
        button="Become a Partner"
      />
      <Footer text="Be a Partner" />
      <FixedBar onClick={submit} />
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

export default MainTraveler;

// const Input = styled.input`
//   display: block;
// `;
// const TextBox = styled.textarea``;
// <Input vlaue={name} name="name" onChange={this.onChange}></Input>
//         <Input vlaue={phone} name="phone" onChange={this.onChange}></Input>
//         <Input vlaue={email} name="email" onChange={this.onChange}></Input>
//         <TextBox
//           vlaue={content}
//           name="content"
//           onChange={this.onChange}
//         ></TextBox>
//         <button onClick={this.onClick}>제출</button>

// constructor(props) {
//   super(props);
//   this.state = {
//     name: "",
//     phone: "",
//     email: "",
//     content: ""
//   };
// }
// onChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
//   console.log(this.state.name);
//   console.log(this.state.phone);
//   console.log(this.state.email);
//   console.log(this.state.content);
// };
// onClick = () => {
//   fetch("http://10.58.6.175:8000/user/contact", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       name: this.state.name,
//       phone_number: this.state.phone,
//       email: this.state.email,
//       content: this.state.content,
//       is_traveller: true,
//       is_provider: false
//     })
//   });
// };
