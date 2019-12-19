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
          <Link onClick={this.showSettings} to="/">
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
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog#top">Blog</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#about">About</Link>
          <Link to="/#reviews">Reviews</Link>
          <Link href="#bottom" to="#bottom">
            Contact
          </Link>
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
