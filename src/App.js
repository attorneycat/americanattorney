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
            <Link to="/blog#top">Blog</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#about">About</Link>
            <Link to="/#reviews">Reviews</Link>
            <Link href="#bottom" to="#bottom">
              Contact
            </Link>

            <a style={{ marginLeft: "auto" }} target="_blank" href="https://wa.me/18083979999">
              <Icon icon={Wa} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Ln} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Wc} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Li} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Ig} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Yt} />
            </a>
            <a href="https://instagram.com">
              <Icon icon={Fb} />
            </a>
            <a href="mailto:mail@usaatty.com">
              <Icon icon={Mail} />
            </a>
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
