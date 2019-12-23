import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

import styled from "@emotion/styled";
import { PageContents } from "../components/core";

import PostSummary from "./components/PostSummary";
import Hero from "pages/components/Hero";

import ny2 from "assets/ny2.jpg";

import postsJson from "assets/posts.js";



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
            let post = postJson || {};
            return (
              <PostSummary
                key={post.id}
                title={post.title}
                date={post.date}
                summary={post.summary}
                image={post.image}
                id={post.id}
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
