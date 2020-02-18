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
`;

const IconBox = styled.img`
  margin-bottom: 15px;
`;
const Text = styled.h1`
  line-height: 30px;
  font-size: 15px;
`;
