import React from "react";
import styled from "@emotion/styled";

//Import Core
import { Button, PageContents } from "./components/core";

//Import Components
import Hero from "./components/Hero";
import PictureTextBlock from "./components/PictureTextBlock";
import TextOverPictureBlock from "./components/TextOverPictureBlock";
import ServicesIOffer from "./components/ServicesIOffer";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

//Import Assets
import mountainSplash from "assets/mountainSplash.jpg";
import laptopStock from "assets/laptopStock.jpg";
import pinkCouch from "assets/pinkCouch.jpg";
import windowpic from "assets/windowpic.jpg";
import nypic from "assets/nypic.jpg";
import ny2 from "assets/ny2.jpg";
import ny3 from "assets/ny3.jpg";
import ny6 from "assets/nypic6.jpg";
import attorneycat from "assets/attorneycat.jpg";
import homeoffice from "assets/homeoffice.jpg";

const WhiteBreak = styled("div")`
  height: 5em;
  width: 100%;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToHash = this.scrollToHash.bind(this);
  }
  componentDidMount() {
    this.scrollToHash();
  }

  scrollToHash() {
    if (window.location.hash) {
      var element_to_scroll_to = document.getElementById(
        window.location.hash.substr(1)
      );
      if (element_to_scroll_to) {
        console.log("element_to_scroll_to", element_to_scroll_to);
        element_to_scroll_to.scrollIntoView();
      }
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Hero image={ny2} />
        <WhiteBreak />
        <br />
        <PageContents>
          <PictureTextBlock
            id="laptopStock"
            pictureLeft
            backgroundImage={laptopStock}
          >
            <h2>Do You Need An American Trademark Registration?</h2>
            <p>We can help!</p>
            <p>
              In 2019, the United States passed a law requiring all persons not
              living in the U.S. to use an American licensed attorney to process
              their US trademark application.
            </p>
            <p>
              The Law Offices of Catherine Tang can help you register your
              trademark today. We assist with all stages of your trademark and
              business needs, from initial trademark registration and USPTO
              office action reponses, to growing and protecting your business.
            </p>
            <p>
              Conveniently located in both the United States and Asia, we work
              in your time zone to provide you with a seamless trademark
              registration process.
            </p>
            <br />

            <center>
              <a href="#bottom">
                <Button style={{ color: "#ffffff" }}> Get Started Now </Button>
              </a>
            </center>
          </PictureTextBlock>

          <PictureTextBlock pictureRight backgroundImage={pinkCouch}>
            <h2>Our Comprehensive Search & Application Package</h2>

            <p>
              Complete search on federal, state, and federal databases for
              potential conflicts.
            </p>
            <p>Attorney drafted opinion letter prepared by Catherine Tang</p>
            <p>
              Trademark application prepared and filed by a US licensed attorney
            </p>
            <p>Monitoring of your trademark application</p>
            <p>Phone consultation with Attorney Cat</p>
            <p> </p>
            <center>
              <a href="#bottom">
                <Button href="#bottom" style={{ color: "#ffffff" }}>
                  Start Your Application
                </Button>
              </a>
              <b>
                <p>$650 + government filing fee ($275)</p>
              </b>
            </center>
          </PictureTextBlock>

          <TextOverPictureBlock backgroundImage={homeoffice} />
          <a id="services" />
          <ServicesIOffer id="services" />

          <TextOverPictureBlock
            backgroundImage={mountainSplash}
            overlayColor={"rgba(0,0,0,0.2)"}
          >
            <h3>
              Legal advice doesn't have to be intimidating and out of reach.
            </h3>
            <h1>
              {" "}
              Whether you're in Asia, Europe, Americas, or anywhere else in the
              world... we can process your American trademark for you.{" "}
            </h1>

            <h3>
              We work with business owners, creatives, and influencers of all
              kinds to protect their work. You made it... don't let someone else
              steal it and profit off what you've done!
            </h3>

            <h3>
              Our boutique law firm offers bespoke legal services for
              entreprenuers, influencers, and business owners. We offer high
              quality legal services at affordable prices for business owners
              just like you.
            </h3>
            <br />
            <a href="#bottom">
              <Button style={{ color: "#ffffff" }}>
                Start Your Application Today
              </Button>
            </a>
          </TextOverPictureBlock>
          <a id="about" />
          <PictureTextBlock
            id="about"
            pictureLeft
            backgroundImage={attorneycat}
          >
            <h2>Meet Our Attorney</h2>
            <p>
              Prior to law, Attorney Catherine Tang had an extensive background
              in marketing and business development. Like you, she is an
              entrepreneur and business owner starting her own company at 15
              years old.
            </p>
            <p>
              Catherine has worked with companies like Yelp, MySpace, YouTube,
              and countless other small businesses. She is uniquely situated to
              help entrepreneurs, influencers, and business owners navigate
              their legal and growth challenges having been in all their shoes.
            </p>{" "}
            <p>
              She decided to pursue a law degree because she knew the how much
              business and every day life is intertwined with law and that
              knowledge of the law has the power to make a difference in the
              world.
            </p>
            <p>
              She embarked her law school journey with two kids under two years
              old, her youngest being only 3 months old when she started her
              first day, while continuing to manage a business in the medical
              field.{" "}
            </p>{" "}
            <p>
              After graduating in the top of her law school class, she worked
              for one of the largest international corporate law firms in the
              Asia and quickly realized that working law firm hours in “big law”
              environments would not allow her to achieve her own goals of both
              being able to be present for her family, and also to help others
              grow their business so she quit to do what she enjoys most: start
              a company and grow it organically, and helping others do the same.{" "}
            </p>
            <center>
              <br></br>
              <a href="#bottom">
                <Button style={{ color: "#ffffff" }}>
                  Book a Consult Today{" "}
                </Button>
              </a>

              <b>
                <p>Initial Consultations with Attorney Cat are Free</p>
              </b>
            </center>
          </PictureTextBlock>
          <TextOverPictureBlock backgroundImage={ny6} />
          <a id="reviews" />
          <Testimonials  />

          <TextOverPictureBlock backgroundImage={nypic} />
        </PageContents>
        <a name="bottom" id="bottom" />
        <section name="bottom" id="bottom" />
        <br />
        <br />
      </div>
    );
  }
}
// Todos:
// Get pictures working for picture text block
