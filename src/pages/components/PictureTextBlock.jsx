import React from "react";
import styled from "@emotion/styled";

//Import core
import {SectionPicture, Button } from "./core";

const SplitSection = styled("div")`
  flex-direction: ${props=>props.pictureLeft ? 'row' : 'row-reverse'};
  flex-direction: ${props=>props.pictureRight ? 'row-reverse' : 'row'};
  position: relative;
  min-height: 80vh;
  text-align: left;
  color: grey;
  display:flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const SplitContent = styled("div")`
  max-width: 500px;
  padding: 30px;
  margin: auto;
  @media (max-width: 750px) {
    margin:0 auto 0 auto
  }
`;

export const SplitPicture = styled("img")`
  background-color: black;
  width:60%;
  ${props=>props.backgroundImage &&
    'background-image: url(' + props.backgroundImage + ');'
  }
  background-position:center;
  background-size: cover;
  @media (max-width: 750px) {
    /* width:100vw; */
    width:initial;
    height:60vh
    /* height:30vh; */
  }
`


export default function PictureTextBlock(props) {
  let sectionProps = {
    pictureRight: props.pictureRight,
    pictureLeft: props.pictureLeft,
  };
  return (
    <SplitSection {...sectionProps}>
      <SplitPicture id='laptopStock' backgroundImage={props.backgroundImage}/>
      <SplitContent>{props.children}</SplitContent>
    </SplitSection>
  );
}
