import React, { useState } from "react";
import styled from "styled-components";

const FixedBar = ({ onClick }) => {
  const [day, setDay] = useState(null);
  const [hours, setHours] = useState(null);
  const [min, setMin] = useState(null);
  const [sec, setSec] = useState(null);
  const [email, setEmail] = useState(null);

  let countDownDate = new Date("Apr 1, 2020 09:00:00").getTime();
  let a = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
      setSec("0" + seconds);
    } else {
      setSec(seconds);
    }
    if (minutes < 10) {
      setMin("0" + minutes);
    } else {
      setMin(minutes);
    }
    if (hours < 10) {
      setHours("0" + hours);
    } else {
      setHours(hours);
    }
    if (days < 10) {
      setDay("0" + days);
    } else {
      setDay(days);
    }
  });

  return (
    <Container>
      <MainContainer>
        <CountDown>
          <SubscribeText>We will be open soon..</SubscribeText>
          <Div>
            <CountDownBox>{day}</CountDownBox>&ensp;Day.
            <CountDownBox>{hours}</CountDownBox>&ensp;Hrs.
            <CountDownBox>{min}</CountDownBox>&ensp;Min.
            <CountDownBox>{sec}</CountDownBox>&ensp;Sec.
          </Div>
        </CountDown>
        <Subscribe>
          <SubscribeText>Keep in touch with us!</SubscribeText>
          <FlexBox>
            <SubscribeInput placeholder="Your Email Address..." />
            <Button onClick={onClick}>Subscribe</Button>
          </FlexBox>
        </Subscribe>
      </MainContainer>
    </Container>
  );
};

export default FixedBar;

const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  background: #00a3c8;
  padding: 25px 0;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
`;
const CountDown = styled.div`
  width: 50%;
`;

const Div = styled.div`
  display: flex;
  align-items: flex-end;
  color: #fff;
  font-size: 12px;
  letter-spacing: 0;
  font-family: visbyRegular;
  /* margin-left: 5px; */
`;
const CountDownBox = styled.div`
  background: #048baa;
  width: 40px;
  color: #fff;
  text-align: center;
  font-family: visbyHeavy;
  font-size: 22px;
  padding: 10px 2px;
  margin-left: 10px;
  display: inline-block;
  :first-child {
    margin-left: 0;
  }
`;
const Subscribe = styled.div`
  width: 50%;
`;
const SubscribeText = styled.h1`
  font-family: visbyBold;
  font-size: 24px;
  margin-bottom: 15px;
  color: #005a6f;
  letter-spacing: normal;
`;

const FlexBox = styled.div`
  /* justify-content: space-between; */
  align-items: center;
  display: flex;
`;
const SubscribeInput = styled.input`
  padding: 10px 10px;
  border: none;
  width: 398px;
  border: 1px solid #ebeded;
  font-size: 13px;
  border-radius: 5px;
`;
const Button = styled.button`
  margin-left: 15px;
  padding: 10px;
  color: #fff;
  background: #005a6f;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #00a3c8;
    transition: 0.2s ease-in-out;
  }
`;
