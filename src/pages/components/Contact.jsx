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

const Link = styled('a')`
  padding: 1rem;
  display: inline-block;
`;

const Title = styled('h3')`
@media (max-width: 1100px) {
  font-size: 1em;
}
`
export const ContactSection = props => {
  return (
    <Section id='contactsection' green style={{ minHeight: "auto" }}>
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
    <Section id="footer">
      <SectionContent>
      <Row>
      <HorizBlock>
        <Title>Contact</Title>
        <Paragraph>
          mail@usaatty.com
          <br />
          <br /> +1 808 397 9999 <br />
          <br /> +66 92 367 3347
        </Paragraph>
      </HorizBlock>
      </Row>
        <Row>
          <HorizBlock>
            <Title>California & United States </Title>
            <Paragraph>
              {" "}
              125 12th St., Suite 100
              <br /> Oakland, CA <br />{" "}
            </Paragraph>
          </HorizBlock>
          <HorizBlock>
            <Title>Hawaii & United States </Title>
            <Paragraph>
              {" "}
              125 12th St., Suite 100
              <br /> Oakland, CA <br />{" "}
            </Paragraph>
          </HorizBlock>
          <HorizBlock>
            <Title>Thailand & Asia </Title>
            <Paragraph>
              140 Sukhumvit Rd #1804 <br />
              Bangkok 10110
            </Paragraph>
          </HorizBlock>
        </Row>
        <SocialMediaRow>
          <Link href="https://instagram.com">
            <Icon icon={Wa} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Ln} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Wc} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Li} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Ig} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Fb} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Yt} />
          </Link>
          <Link href="https://instagram.com">
            <Icon icon={Mail} />
          </Link>
        </SocialMediaRow>
      </SectionContent>
    </Section>
  );
};
