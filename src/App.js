import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import { ContactSection, ContactDetails } from "pages/components/Contact";
import ContactForm from "pages/components/ContactForm";

import { slide as Menu } from "react-burger-menu";

import "./app.css";

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

import styled from "@emotion/styled";

const NavBar = styled("div")`
  width: 100%;
  display: flex;
  max-width: 1500px;
`;

const MobileVisibleLink = styled("a")`
  @media (max-width: 483px) {
    display: initial;
    font-size:1.6em;
    padding:15px;
  }
`;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showSettings = this.showSettings.bind(this);
  }
  showSettings(event) {
    console.log("showing settings");
    // event.preventDefault();
    let menuOpen = this.state.menuOpen ? true : false;
    this.setState({ menuOpen });
  }
  render() {
    return (
      <Root>
        <Menu isOpen={this.state.menuOpen}>
          <Link onClick={this.showSettings} to="/#top">
            Home
          </Link>
          <Link onClick={this.showSettings} to="/blog#top">
            Blog
          </Link>
          <Link onClick={this.showSettings} to="/#services">
            Services
          </Link>
          <Link onClick={this.showSettings} to="/#about">
            About
          </Link>
          <Link onClick={this.showSettings} to="/#reviews">
            Reviews
          </Link>
          <Link onClick={this.showSettings} href="#bottom" to="#bottom">
            Contact
          </Link>
        </Menu>
        <nav>
          <NavBar>
            <Link to="/">Home</Link>
            <Link to="http://blog.usaatty.com/">Blog</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#about">About</Link>
            <Link to="/#reviews">Reviews</Link>
            <Link href="#bottom" to="#bottom">
              Contact
            </Link>

            <MobileVisibleLink
              style={{ marginLeft: "auto" }}
              target="_blank"
              href="https://wa.me/18083979999"
            >
              <Icon icon={Wa} />
            </MobileVisibleLink>
            <MobileVisibleLink target="_blank" href="http://line.me/ti/p/~amojuris">
              <Icon icon={Ln} />
            </MobileVisibleLink>
            <MobileVisibleLink target="_blank" href="https://msng.link/o/?ctang88=wc">
              <Icon icon={Wc} />
            </MobileVisibleLink>
            <a target="_blank" href="https://www.linkedin.com/in/cattang/">
              <Icon icon={Li} />
            </a>
            <a target="_blank" href="https://instagram.com/americanattorney">
              <Icon icon={Ig} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCFArqSbKHRiZrRo8LRhpe3Q?view_as=subscriber"
            >
              <Icon icon={Yt} />
            </a>
            <a target="_blank" href="https://facebook.com/usaatty">
              <Icon icon={Fb} />
            </a>
            <MobileVisibleLink target="_blank" href="mailto:mail@usaatty.com">
              <Icon icon={Mail} />
            </MobileVisibleLink>
          </NavBar>
        </nav>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
        <ContactForm />
        <ContactSection />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/attorneycat"
          style={{ minWidth: "320px", height: "630px" }}
        />
        <ContactDetails />
      </Root>
    );
  }
}

export default App;
