import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import { ContactSection, ContactDetails } from "pages/components/Contact";
import ContactForm from "pages/components/ContactForm";

import { slide as Menu } from "react-burger-menu";

import "./app.css";

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
          <a onClick={this.showSettings} to="/">
            Home
          </a>
          <a onClick={this.showSettings} to="/blog#top">
            Blog
          </a>
          <a onClick={this.showSettings} to="/#services">
            Services
          </a>
          <a onClick={this.showSettings} to="/#about">
            About
          </a>
          <a onClick={this.showSettings} to="/#reviews">
            Reviews
          </a>
          <a onClick={this.showSettings} href="#bottom" to="#bottom">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <nav>
          <a to="/">Home</a>
          <a to="/blog#top">Blog</a>
          <a to="/#services">Services</a>
          <a to="/#about">About</a>
          <a to="/#reviews">Reviews</a>
          <a href="#bottom" to="#bottom">
            Contact
          </a>
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
