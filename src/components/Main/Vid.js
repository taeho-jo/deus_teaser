import React from "react";
import movie from "../../video/web_video.mp4";
import styled from "styled-components";
import aaa from "../../images/head_img.jpg";

const Vid = () => {
  return (
    <Container>
      <Video autoPlay loop src={movie}></Video>

      <Image />
    </Container>
  );
};

export default Vid;

const Container = styled.div`
  max-width: 100%;
`;

const Video = styled.video`
  max-width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.div`
  display: none;
  @media (max-width: 768px) {
    background-image: url(${aaa});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    height: 500px;
    display: block;
    max-width: 100%;
  }
`;
