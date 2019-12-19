import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

import styled from "@emotion/styled";
import { PageContents } from "../components/core";

import PostSummary from "./components/PostSummary";
import Hero from "pages/components/Hero";

import ny2 from "assets/ny2.jpg";

import postsJson from "./components/posts.json";



export default class Blog extends React.Component {
  componentDidMount() {
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
  //
  render() {
    return (
      <div>
        <Hero image={ny2} size="small" />
        <br />
        <PageContents style={{ padding: "15px" }}>
          <h1 style={{ textAlign: "center" }}>Blog Time</h1>
          <br />
          {postsJson.map((postJson, index) => {
            return (
              <PostSummary
                key={index}
                title={postJson.title}
                date={postJson.date}
                summary={postJson.summary}
                image={postJson.image}
                id={postJson.id}
              />
            );
          })}
        </PageContents>
        <br />
        All Posts:
        <a href="#top" id="bottom">
          Scroll to top!
        </a>
      </div>
    );
  }
}
