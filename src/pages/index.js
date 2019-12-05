import React from "react";
import styled from "@emotion/styled";

//Import Core
import { Button } from "./components/core";

//Import Components
import Hero from "./components/Hero";
import PictureTextBlock from "./components/PictureTextBlock";
import TextOverPictureBlock from "./components/TextOverPictureBlock";
import ServicesIOffer from "./components/ServicesIOffer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

//Import Assets
import mountainSplash from "assets/mountainSplash.jpg";
import laptopStock from "assets/laptopStock.jpg";
import pinkCouch from "assets/pinkCouch.jpg";

const WhiteBreak = styled("div")`
  height: 5em;
  width: 100%;
`;

const HomePageContents = styled("div")`
  max-width: 1540px;
  margin: auto;
  box-shadow: 0px 15px 15px grey;
`;

export default () => (
  <div style={{ textAlign: "center" }}>
    <Hero />
    <WhiteBreak />
    <br />
    <HomePageContents>
      <PictureTextBlock pictureLeft backgroundImage={laptopStock}>
        <h2>Who Are We?</h2>
        <p>Legal advice doesn't have to be intimidating and out of reach.</p>
        <p>
          The CAT Law is a boutique law firm offering bespoke legal services for
          entreprenuers, influencers, and business owners. We offer high quality
          legal services at affordable prices for business owners just like you.
        </p>
        <p>
          Frustrated with her own experience seeking legal counsel, our founder
          sought to solve the problems she encountered and be a lawyer who not
          only does good work, but also cares about her clients.
        </p>
        <p>
          Beyond helping businesses grow, CAT Law gives back. We aim to be a
          sustainable lean practice and dedicate a portion of our practice
          towards giving back to the community through pro bono service helping
          to bridge the legal gap.
        </p>
        <br />

        <Button> Get Started Now </Button>
      </PictureTextBlock>

      <PictureTextBlock pictureRight backgroundImage={pinkCouch}>
        Prior to law, Attorney Catherine Tang had an extensive background in
        marketing/business development. Like you, she is an entrepreneur and
        business owner starting her own company when she was only 15 years old.
        Cat has worked with companies like Yelp, MySpace, YouTube, and countless
        other small businesses. She is uniquely situated to help entrepreneurs,
        influencers, and business owners navigate their legal and growth
        challenges having been in all their shoes. She decided to pursue a law
        degree because she knew the how much business and every day life is
        intertwined with law and that knowledge of the law has the power to make
        a difference in the world. She embarked her law school journey with two
        kids under two years old, her youngest being only 3 months old when she
        started her first day, while continuing to manage a business in the
        medical field. After graduating in the top of her law school class, she
        worked for one of the largest international corporate law firms in the
        Asia and quickly realized that working law firm hours in “big law”
        environments would not allow her to achieve her own goals of both being
        able to be present for her family, and also to help others grow their
        business so she quit to do what she enjoys most: start a company and
        grow it organically, and helping others do the same. CONSULT WITH
        ATTORNEY CAT Next
      </PictureTextBlock>
      <PictureTextBlock pictureLeft />

      <PictureTextBlock pictureRight />
      <TextOverPictureBlock
        backgroundImage={mountainSplash}
        overlayColor={"rgba(0,0,0,0.2)"}
      >
        <h1> I love to eat hotdogs and cococola and im a cat </h1>

        <h3>
          We work with creatives and influencers of all kinds to protect their
          work. You made it... don't let someone else steal it and profit off
          what you've done!
        </h3>

        <h3>
          We work with creatives and influencers of all kinds to protect their
          work. You made it... don't let someone else steal it and profit off
          what you've done!
        </h3>

        <h2>
          We work with creatives and influencers of all kinds to protect their
          work. You made it... don't let someone else steal it and profit off
          what you've done!You made it... don't let someone else steal it and
          profit off what you've done!
        </h2>
      </TextOverPictureBlock>

      <ServicesIOffer />

      <TextOverPictureBlock backgroundImage={mountainSplash} />

      <Testimonials />
      <TextOverPictureBlock backgroundImage={mountainSplash} />

      <ContactForm />

      <Contact />
    </HomePageContents>
  </div>
);

// Todos:
// Get pictures working for picture text block
