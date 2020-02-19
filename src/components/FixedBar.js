import React, { useState } from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const FixedBar = ({ onClick, onChange, t }) => {
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
        <Box>
          <CountDown>
            <SubscribeText>{t("openSoon")}</SubscribeText>
            <Div>
              <CountDownBox>{day}</CountDownBox>&ensp;{t("day")}.
              <CountDownBox>{hours}</CountDownBox>&ensp;{t("Hours")}.
              <CountDownBox>{min}</CountDownBox>&ensp;{t("min")}.
              <CountDownBox>{sec}</CountDownBox>&ensp;{t("sec")}.
            </Div>
          </CountDown>
          <Subscribe>
            <SubscribeText>{t("touchUs")}</SubscribeText>
            <FlexBox>
              <SubscribeInput
                onChange={onChange}
                value={email}
                placeholder={t("emailPlaceholder")}
              />
              <Button onClick={onClick}>Subscribe</Button>
            </FlexBox>
          </Subscribe>
        </Box>
      </MainContainer>
    </Container>
  );
};

export default withTranslation()(FixedBar);

const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  background: #00a3c8;
  padding: 25px 0;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CountDown = styled.div`
  width: 50%;
  @media (max-width: 655px) {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
  @media (max-width: 655px) {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const SubscribeText = styled.h1`
  font-family: visbyBold;
  font-size: 18px;
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
  @media (max-width: 655px) {
    width: 100%;
  }
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
