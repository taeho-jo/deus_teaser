import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const TravelerLayout = ({ LogoImg, children }) => {
  return (
    <Container>
      <Header>
        <Logo src={LogoImg}></Logo>
        <Menu>{children}</Menu>
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

const Menu = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;
