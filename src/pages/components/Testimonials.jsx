import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent } from "./core";

//Import assets
import reiki from "assets/reiki.png";
import firstplace from "assets/firstplace.png";
import certGreen from "assets/cert-green.png";
import certPurp from "assets/cert-purp.png";

const Row = styled("div")`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Testimonial = styled("div")`
  width: 30%;
  @media (max-width: 550px) {
    width: 100px;
  }
  display: block;
  margin: auto;
`;
const BoldHeading = styled("h4")`
  font-weight: 800;
  color: #b73954;
`;

export default function Testimonials(props) {
  return (
    <Section backgroundColor={"white"} color={"black"}>
      <SectionContent>
        <h2 style={{ color: "#b73954" }}>Testimonials</h2>
        <Row>
          <Testimonial>
            I love doing stuff with cat because my name is Landon.. and i love big fat motorbikes and small cars
            <br /><br />- Landon
          </Testimonial>
          <Testimonial>
            I love doing stuff with cat because my name is Landon.. and i love big fat motorbikes and small cars
            <br /><br />- Landon
          </Testimonial>
          <Testimonial>
            I love doing stuff with cat because my name is Landon.. and i love big fat motorbikes and small cars
            <br /><br />- Landon
          </Testimonial>
        </Row>
      </SectionContent>
    </Section>
  );
}
