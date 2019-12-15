import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent } from "./core";

const Row = styled('div')`
  display: flex;
  @media (max-width:750px){
    flex-direction: column;
  }
`
const HorizBlock = styled('div')`
  flex:1;
  display: inline-block;
  vertical-align: top;
  min-width: 200px;
  margin:15px;
`
const Paragraph = styled('p')`
  white-space: nowrap;
  margin:0px 5px;
  width:100%;
`
export default function ContactSection(props) {
  return (
    <Section green style={{minHeight:'auto'}}>
      <SectionContent style={{whiteSpace:'normal'}}>
      <h1 style={{ color: "#85c6d4" }}>Contact Us. <br/></h1>
        <h2 style={{ color: "#85c6d4" }}>We try our best to respond within 24 hours or less.</h2>
        <br/>
        <Row>
        <HorizBlock>
          <h3>Contact</h3>
          <Paragraph>mail@usaatty.com<br /><br /> +1 808 397 9999 <br /><br /> +66 92 367 3347</Paragraph>
        </HorizBlock>
        <HorizBlock>
          <h3>California & United States </h3>
          <Paragraph> 125 12th St., Suite 100<br/> Oakland, CA <br/>  </Paragraph>
        </HorizBlock>
        <HorizBlock>
          <h3>Thailand & Asia </h3>
          <Paragraph>140 Sukhumvit Rd #1804 <br/>Bangkok 10110</Paragraph>
        </HorizBlock>
        </Row>

      </SectionContent>
    </Section>
  );
}
