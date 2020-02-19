import React, { useState, useEffect } from "react";
import styled from "styled-components";
import usa from "../../images/usa.png";
import kor from "../../images/kor.png";
import { withTranslation } from "react-i18next";

const TravelerLayout = ({ onClick, text, LogoImg, color, t, i18n }) => {
  const [click, setClick] = useState(false);
  const change = () => {
    setClick(!click);
    if (click) {
      i18n.changeLanguage("ko-KR");
    } else {
      i18n.changeLanguage("en-US");
    }
  };

  useEffect(() => {
    if (click) {
      i18n.changeLanguage("ko-KR");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [click, i18n]);

  return (
    <Container>
      <Header>
        <Logo src={LogoImg}></Logo>
        <Menu>
          {click ? (
            <Lang lang={kor} alt="kor" onClick={change} />
          ) : (
            <Lang lang={usa} alt="usa" onClick={change} />
          )}
          <MenuText color={color}>{t("subscribe")}</MenuText>
          <MenuText color={color} onClick={onClick}>
            {text}
          </MenuText>
        </Menu>
      </Header>
    </Container>
  );
};

export default withTranslation()(TravelerLayout);

const Container = styled.div`
  padding-top: 35px;
`;

const Header = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.img``;

const Lang = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${props => props.lang});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuText = styled.p`
  min-width: 150px;
  color: ${props => props.color};
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
