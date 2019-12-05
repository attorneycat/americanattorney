import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent } from "./core";

//Import assets
import reiki from "assets/reiki.png";
import firstplace from "assets/firstplace.png";
import certGreen from "assets/cert-green.png";
import certPurp from "assets/cert-purp.png";

const IconRow = styled("div")`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const IconGroup = styled("div")`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;
const Qualification = styled("div")`
  display: inline;
  padding: 15px;
  /* max-width: 150px; */
  flex: 1;
`;
const Icon = styled("img")`
  width: 150px;
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

export default function ServicesIOffer(props) {
  return (
    <Section backgroundColor={"white"} color={"black"}>
      <SectionContent>
        <h2 style={{ color: "#b73954" }}>Services I offer</h2>
        <IconRow>
          <IconGroup>
            <Qualification>
              <Icon src={certPurp} />
              <BoldHeading>I like eating food</BoldHeading>
              <p>
                Especially Thai Food So you've applied for at trademark and it's
                been denied. No problem! An office action can be overcome by an
                experience intellectual property attorney. We can submit a
                response on your behalf to a likelihood of confusion, or any
                other office action.
              </p>
            </Qualification>
            <Qualification>
              <Icon src={reiki} />
              <BoldHeading>Certified to sue</BoldHeading>
              <p>Suzie sue</p>
            </Qualification>
          </IconGroup>
          <IconGroup>
            <Qualification>
              <Icon src={certGreen} />
              <BoldHeading>Licensed & Insured</BoldHeading>
              <p>To get you money</p>
            </Qualification>
            <Qualification>
              <Icon src={firstplace} />
              <BoldHeading>700+ Hours Experience</BoldHeading>
              <p>Being a mommy</p>
            </Qualification>
          </IconGroup>
        </IconRow>
        <IconRow>
          <IconGroup>
            <Qualification>
              <Icon src={certPurp} />
              <BoldHeading>I like eating food</BoldHeading>
              <p>Especially Thai Food</p>
            </Qualification>
            <Qualification>
              <Icon src={reiki} />
              <BoldHeading>Certified to sue</BoldHeading>
              <p>Suzie sue</p>
            </Qualification>
          </IconGroup>
          <IconGroup>
            <Qualification>
              <Icon src={certGreen} />
              <BoldHeading>Licensed & Insured</BoldHeading>
              <p>To get you money</p>
            </Qualification>
            <Qualification>
              <Icon src={firstplace} />
              <BoldHeading>700+ Hours Experience</BoldHeading>
              <p>Being a mommy</p>
            </Qualification>
          </IconGroup>
        </IconRow>
      </SectionContent>
    </Section>
  );
}
