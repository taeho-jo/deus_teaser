import React from "react";
import styled from "styled-components";

const TravelerLayout = ({ onClick, text, LogoImg, color }) => {
  return (
    <Container>
      <Header>
        <Logo src={LogoImg}></Logo>
        <Menu>
          <MenuText color={color}>Subscribe</MenuText>
          <MenuText color={color} onClick={onClick}>
            {text}
          </MenuText>
        </Menu>
      </Header>
    </Container>
  );
};

export default TravelerLayout;

const Container = styled.div`
  padding-top: 35px;
`;

const Header = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img``;

const Menu = styled.div`
  display: flex;
`;

const MenuText = styled.p`
  color: ${props => props.color};
  cursor: pointer;
  font-size: 15px;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
  :last-child {
    margin-left: 45px;
  }
  :hover {
    color: #00a3c8;
    transition: 0.2s ease-in-out;
  }
`;
