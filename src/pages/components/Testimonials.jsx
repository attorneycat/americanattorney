import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent } from "./core";


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
    width: 250px;
  }
  @media (max-width: 950px) {
    width: 90%;
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
        <h2 style={{ color: "#85c6d4" }}>Testimonials</h2>
        <Row>
          <Testimonial>
            Catherine was able to navigate the complexity of my issue within
            minutes and provide accurate and detailed advice. Her advice led me
            to the exact outcome I had hoped for. For any future issues, I will
            be using CAT Law.
            <br />
            <br />
            <h4>- Tierra</h4>
          </Testimonial>
          <Testimonial>
            I am a business owner and had a great experience meeting with
            Catherine who helped me re-do a contract that needed serious help.
            She caught so many issues that my previous attorneys missed.
            Appreciate the support and patience she took with understanding my
            needs and breaking it down for me in terms for a non-lawyer type
            person. Thanks so much, highly recommended and I will definitely be
            using her firm again for my business needs.
            <br />
            <br /><b>- Rick</b>
          </Testimonial>
          <Testimonial>
            Catherine was incredibly helpful in providing advice in a
            challenging situation. Her responses were quick, professional &
            detailed. I would highly recommended Attorney Cat.
            <br />
            <br /><b>- Leia</b>
          </Testimonial>
        </Row>
      </SectionContent>
      <SectionContent>
        <Row>
          <Testimonial>
            Catherine was able to navigate the complexity of my issue within
            minutes and provide accurate and detailed advice. Her advice led me
            to the exact outcome I had hoped for. For any future issues, I will
            be using CAT Law.
            <br />
            <br />
            <h4>- Tierra</h4>
          </Testimonial>
          <Testimonial>
            I am a business owner and had a great experience meeting with
            Catherine who helped me re-do a contract that needed serious help.
            She caught so many issues that my previous attorneys missed.
            Appreciate the support and patience she took with understanding my
            needs and breaking it down for me in terms for a non-lawyer type
            person. Thanks so much, highly recommended and I will definitely be
            using her firm again for my business needs.
            <br />
            <br /><b>- Rick</b>
          </Testimonial>
          <Testimonial>
            Catherine was incredibly helpful in providing advice in a
            challenging situation. Her responses were quick, professional &
            detailed. I would highly recommended Attorney Cat.
            <br />
            <br /><b>- Leia</b>
          </Testimonial>
        </Row>


      </SectionContent>
    </Section>


  );
}
