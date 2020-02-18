import React from "react";
import styled from "styled-components";

const Modal = ({ onClick, error, please, color, background }) => {
  return (
    <Body onClick={onClick}>
      <ModalBox>
        <Div>
          <ErrorImg background={background} />
          <ErrorBox color={color}>{error}</ErrorBox>
        </Div>
        <Text>{please}</Text>
        <Button onClick={onClick}>Confirm</Button>
      </ModalBox>
    </Body>
  );
};

export default Modal;

const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  transform: none;
  background-color: #0000006c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 9em;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 0.3125em;
  font-size: 3rem;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;
const ErrorBox = styled.div`
  color: ${props => props.color};
  font-weight: bold;
  font-family: visbyHeavy;
  margin-left: 15px;
  letter-spacing: normal;
`;
const ErrorImg = styled.div`
  background-image: url(${props => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
`;
const Text = styled.p`
  font-size: 1.5rem;
  margin-top: 15px;
  color: #545454;
  font-family: visbyHeavy;
  letter-spacing: normal;
`;
const Button = styled.button`
  width: 6em;
  padding: 15px;
  margin-top: 20px;
  background: #3085d6;
  border-radius: 0.25em;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-family: visbyHeavy;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #1f67ad;
  }
`;
