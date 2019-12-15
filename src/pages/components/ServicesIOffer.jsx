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
  color: #85c6d4;
`;

export default function ServicesIOffer(props) {
  return (
    <Section backgroundColor={"white"} color={"black"}>
      <SectionContent>
        <h1 style={{ color: "#85c6d4" }}>Trademark Services</h1>
        <p>
          {" "}
          You've built a brand... now protect it. Whether you're an American
          business owner or foreign based, Attorney Cat can help you register
          your trademark with the USPTO. We provide legal services to anyone who
          wants to register a <b>trademark</b>
          in the <b>United States</b>, as well as a broad range of legal
          services for residents of <b>California</b>, and companys expanding in{" "}
          <b>Asia</b>.
        </p>
        <IconRow>
          <IconGroup>
            <Qualification>
              <Icon src={certPurp} />
              <h2 style={{ color: "#85c6d4" }}>Trademark Search</h2>
              <p></p>
              <p>
                A trademark search helps identify if someone else is already
                using your name, logo, or slogan. We make sure you are not
                infringing on someone elses trademark before you file.
              </p>
              <p>
                We conduct a comprehensive search on federal, state, common law,
                and internet databases to check if you're clear to start your
                application.
              </p>
              <p>
                Attorney Cat will prepare an attorney drafted opinion letter on
                the likelihood of success on your application saving you time
                and money.
              </p>
            </Qualification>
            <Qualification>
              <Icon src={reiki} />
              <h2 style={{ color: "#85c6d4" }}>Trademark Registration</h2>
              <p>
                Your package includes free phone consultations with Attorney
                Cat.</p>
                <p> Once your search has been cleared, Attorney Cat will call
                you to discuss your results with you and proceed with your USPTO
                application.{" "}
              </p>
              <p>
                We prepare and file your trademark registration with the UPSTO
                then monitor and report the status of your application.
              </p>
              <p>
                All packages include minor office action reponses at no
                additional cost.
              </p>
            </Qualification>
          </IconGroup>
          <IconGroup>
            <Qualification>
              <Icon src={certGreen} />
              <h2 style={{ color: "#85c6d4" }}>USPTO Office Actions</h2>
              <p>
                So you've applied for at trademark and it's been denied. No
                problem! An office action can be overcome by an experienced
                intellectual property attorney. We can submit a USPTO office
                action response on your behalf due to a likelihood of confusion,
                or any other office action.
              </p>
            </Qualification>
            <Qualification>
              <Icon src={firstplace} />
              <h2 style={{ color: "#85c6d4" }}>Legal & Marketing Strategy</h2>
              <p>
                Not only does Catherine provide legal services, she utilizes her
                business background to provide legal AND marketing strategy to
                help your business florish. A lot of attorneys can register a
                trademark for you. Few have experience growing and running
                companies themselves to know what you're going through and what
                you need to provide an all encompassing legal partner for your
                company.
              </p>
            </Qualification>
          </IconGroup>
        </IconRow>

      </SectionContent>
    </Section>
  );
}
