import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent, SectionPicture, Button } from "./core";

export default function TextOverPictureBlock(props) {
  return (
    <Section
      backgroundImage={props.backgroundImage}
      backgroundColor={props.overlayColor}
      color={'white'}
    >
      <SectionContent>{props.children}</SectionContent>
    </Section>
  );
}
