import React from "react";
import styled from "styled-components";

const NextPage = ({ partner, title, content, button }) => {
  return (
    <Container partner={partner}>
      <Box>
        <Title>{title}</Title>
        <Contents>{content}</Contents>
        <Button>{button}</Button>
      </Box>
    </Container>
  );
};

export default NextPage;

const Container = styled.div`
  background-image: url(${props => props.partner});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`;
const Box = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid black; */
`;
const Title = styled.h1`
  font-size: 35px;
  font-family: visbyHeavy;
  color: #fff;
  letter-spacing: normal;
  text-align: center;
`;
const Contents = styled.p`
  font-size: 15px;
  color: #fff;
  line-height: 30px;
  margin-top: 20px;
  text-align: center;
  letter-spacing: normal;
  font-family: "Noto Sans KR", sans-serif;
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
    background: #fff;
    color: #00a3c8;
    transition: 0.2s ease-in-out;
  }
`;
