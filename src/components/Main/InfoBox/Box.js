import React from "react";
import styled from "styled-components";

const Box = ({ url, text, width }) => {
  return (
    <Container width={width}>
      <IconBox src={url} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Box;

const Container = styled.div`
  width: ${props => props.width};
  padding: 20px;
  border: 1px solid #ebeded;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px 0;
    /* display: block; */
    margin-top: 15px;
  }
`;

const IconBox = styled.img`
  margin-bottom: 15px;
  /* border: 1px solid black; */
`;
const Text = styled.h1`
  line-height: 30px;
  font-size: 15px;
  /* border: 1px solid black; */
  text-align: center;
  letter-spacing: normal;
`;
