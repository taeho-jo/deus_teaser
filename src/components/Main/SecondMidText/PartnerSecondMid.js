import React from "react";
import styled from "styled-components";
import phone from "../../../images/phone_img.png";
import { withTranslation } from "react-i18next";

const PartnerSecondMidText = ({ content, t }) => {
  return (
    <Container>
      <MainContainer>
        <Div>
          <TitleBox>
            <Title>
              {t("middlemen")}&nbsp;
              {/* {t("are")} */}
              <ColorTitle>{t("disappearing")}</ColorTitle>
            </Title>
            <Content>{content}</Content>
          </TitleBox>
        </Div>
      </MainContainer>
      <ImageBox />
    </Container>
  );
};

export default withTranslation()(PartnerSecondMidText);

const Container = styled.div`
  background-color: #28292a;
  /* width: 100%; */
  padding: 60px 0 0 0;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
  /* border: 1px solid orange; */
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 60px;
  /* border: 4px solid orange; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;
const TitleBox = styled.div`
  font-family: visbyHeavy;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  @media (max-width: 1024px) {
    flex-direction: column;
    /* padding: 30px; */
  }
  /* border: 1px solid white; */
`;
const Title = styled.span`
  font-family: visbyHeavy;
  /* display: inline-block; */
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  vertical-align: baseline;
  letter-spacing: normal;
  width: 50%;
  /* border: 3px solid red; */
  @media (max-width: 1024px) {
    width: 100%;
    /* width: 100px; */
  }
`;
const ColorTitle = styled(Title)`
  color: #00a3c8;
  /* border: 1px solid wheat; */
  /* width: 100px; */
`;
const Content = styled.p`
  width: 50%;
  font-size: 15px;
  line-height: 30px;
  color: #fff;
  margin-left: 100px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: normal;
  vertical-align: baseline;
  /* border: 1px solid whi  te; */
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`;

const ImageBox = styled.div`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 675px;
  height: 436.35px;
  margin: 60px auto;
`;

// const MainContainer = styled.div`
//   border: 3px solid white;
//   display: flex;
//   justify-content: center;
//   margin-top: ${props => props.marginTop};
// `;
// const Div = styled.div`
//   width: 100%;
//   max-width: 1100px;
//   padding: 0 60px;
//   border: 1px solid red;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   @media (max-width: 1024px) {
//     padding: 0 30px;
//   }
// `;
// const TitleBox = styled.div`
//   font-family: visbyHeavy;
//   font-size: 35px;
//   line-height: 50px;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid yellow;
//   /* padding: 30px; */
//   @media (max-width: 1024px) {
//     flex-direction: column;
//     /* width: 100%; */
//     /* padding: 0 30px; */
//     /* box-sizing: border-box; */
//   }
// `;
// const Title = styled.span`
//   font-family: visbyHeavy;
//   font-size: 35px;
//   line-height: 50px;
//   color: #fff;
//   vertical-align: baseline;
//   letter-spacing: normal;
//   /* border: 1px solid white; */
//   @media (max-width: 1024px) {
//     width: 100%;
//   }
// `;
// const ColorTitle = styled(Title)`
//   color: #00a3c8;
// `;
// const Content = styled.p`
//   width: 48%;
//   font-size: 15px;
//   line-height: 30px;
//   color: #fff;
//   margin-left: 100px;
//   font-family: "Noto Sans KR", sans-serif;
//   letter-spacing: normal;
//   vertical-align: baseline;
//   /* border: 1px solid white; */
//   @media (max-width: 1024px) {
//     width: 100%;
//     margin-left: 0;
//     margin-top: 30px;
//   }
// `;
// // const Inside = styled.div`
// //   background: #585b5d;
// //   width: 150px;
// //   height: 1px;
// //   margin-top: 60px;
// // `;

// const ImageBox = styled.div`
//   background-image: url(${phone});
//   background-repeat: no-repeat;
//   background-size: cover;
//   max-width: 675px;
//   height: 436.35px;
//   margin: 60px auto;
// `;
