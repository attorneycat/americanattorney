import React from "react";
import styled from "@emotion/styled";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faInstagram as Ig,
  faFacebook as Fb,
  faYoutube as Yt,
  faLinkedin as Li,
  faWeixin as Wc,
  faWhatsapp as Wa,
  faLine as Ln
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope as Mail } from "@fortawesome/free-solid-svg-icons";

//Import core
import { Section, SectionContent } from "./core";

import PrivacyPolicy from "assets/privacyPolicy.pdf";

const Row = styled("div")`
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const HorizBlock = styled("div")`
  flex: 1;
  display: inline-block;
  vertical-align: top;
  min-width: 200px;
  margin: 15px;
`;
const Paragraph = styled("p")`
  white-space: nowrap;
  margin: 0px 5px;
  width: 100%;
`;

const SocialMediaRow = styled(Row)`
  justify-content: center;
  font-size: 1.5em;
  display: flex;
`;

const Link = styled("a")`
  padding: 1rem;
  display: inline-block;
`;

const Title = styled("h3")`
  @media (max-width: 1100px) {
    font-size: 1em;
  }
`;

export const ContactSection = props => {
  return (
    <Section id="contactsection" green style={{ minHeight: "auto" }}>
      <SectionContent style={{ whiteSpace: "normal" }}>
        <h1 style={{ color: "#85c6d4" }}>
          Contact Us. <br />
        </h1>
        <h2 style={{ color: "#85c6d4" }}>
          We try our best to respond within 24 hours or less.
        </h2>
        <br />
      </SectionContent>
    </Section>
  );
};

export const ContactDetails = props => {
  return (
    <Section style={{ minHeight: "30vh" }} id="footer">
      <SectionContent>
        <Row>
          <HorizBlock>
            <Title>California </Title>
            <Paragraph>
              {" "}
              125 12th St., Suite 100
              <br /> Oakland, CA <br /> <br /> +1 808 397 9999 <br />
            </Paragraph>
          </HorizBlock>
          <HorizBlock>
            <Title>Hawaii </Title>
            <Paragraph>
              {" "}
              125 12th St., Suite 100
              <br /> Oakland, CA <br /> <br /> +1 808 397 9999 <br />
            </Paragraph>
          </HorizBlock>
          <HorizBlock>
            <Title>Asia </Title>
            <Paragraph>
              140 Sukhumvit Rd #1804 <br />
              Bangkok, Thailand 10110
              <br /> <br /> +66 92 367 3347
              <br />
            </Paragraph>
          </HorizBlock>
        </Row>

        <SocialMediaRow>
          <center>
            <br />
            <a style={{ fontSize: "0.8em", fontWeight: 300, color: "grey" }} href={PrivacyPolicy}>
              Privacy Policy
            </a>
            <br />
            <br />
            <Link
              style={{ marginLeft: "auto" }}
              target="_blank"
              href="https://wa.me/18083979999"
            >
              <Icon icon={Wa} />
            </Link>
            <Link target="_blank" href="http://line.me/ti/p/~amojuris">
              <Icon icon={Ln} />
            </Link>
            <Link target="_blank" href="https://instagram.com">
              <Icon icon={Wc} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/cattang/">
              <Icon icon={Li} />
            </Link>
            <Link target="_blank" href="https://instagram.com/americanattorney">
              <Icon icon={Ig} />
            </Link>
            <Link target="_blank" href="https://facebook.com/usaatty">
              <Icon icon={Fb} />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCFArqSbKHRiZrRo8LRhpe3Q?view_as=subscriber"
            >
              <Icon icon={Yt} />
            </Link>
            <Link target="_blank" href="mailto:mail@usaatty.com">
              <Icon icon={Mail} />
            </Link>
          </center>
        </SocialMediaRow>
      </SectionContent>
    </Section>
  );
};
