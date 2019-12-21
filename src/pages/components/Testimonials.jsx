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
            be using the Law Offices of Catherine Tang.
            <br />
            <br />
            <h4>- Tierra, Security Professional</h4>
<i>Honolulu, Hawaii</i>
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
            <br />
            <h4>- Richard, Business Owner</h4>
            <i>Illinois & Thailand</i>
          </Testimonial>
          <Testimonial>
            Catherine was incredibly helpful in providing advice in a
            challenging situation. Her responses were quick, professional &
            detailed. I would highly recommended Attorney Cat.
            <br />
            <br />
            <h4>- Leia, Marketing Manager</h4>
            <i>Australia & Thailand</i>
          </Testimonial>
        </Row>
      </SectionContent>
      <SectionContent>
        <Row>
          <Testimonial>
          Catherine is amazing - she has helped my business review and negotiate contracts, broke down the trademark process in an easy to understand way, gave tons of valuable advice, and then even referred me clients!

  She's not only a fantastic lawyer, but someone who goes above and beyond and truly cares for those that she works with.
            <br />
            <br />
            <h4>- Toby, Startup Founder</h4>
            <i>Canadian Digital Nomad</i>
          </Testimonial>
          <Testimonial>
          Catherine helped me with several contract reviews. She was easy to talk to and super helpful! All the legal jargon you see on paper, she can define that to simple english. My go-to attorney for all trademark and business needs.

            <br />
            <br />
            <h4>- Alex, Senior Producer</h4>
            <i>Los Angeles, California</i>
          </Testimonial>
          <Testimonial>

Catherine is everything you could want in a lawyer... AND MORE! No one else I would trust with my businesses and their trademarks. She has helped me grow with awesome tips, and she's incredibly intelligent and pleasant to work with. 
            <br />
            <br />
            <h4>- Jessica, Founder</h4>
            <i>Bay Area, California</i>
          </Testimonial>
        </Row>


      </SectionContent>
    </Section>


  );
}
