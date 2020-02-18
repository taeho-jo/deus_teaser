import React from "react";
import movie from "../../video/web_video.mp4";
import styled from "styled-components";

const Vid = () => {
  return (
    <Container>
      <Video autoPlay loop src={movie}></Video>
    </Container>
  );
};

export default Vid;

const Container = styled.div`
  max-width: 100%;
`;

const Video = styled.video`
  max-width: 100%;
  /* min-height: 100%; */
`;
