import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

import styled from "@emotion/styled";
import { PageContents } from "../components/core";

import Hero from "pages/components/Hero";

import ny2 from "assets/ny2.jpg";

export default function Post({ title, date, content }) {
  const { post } = useRouteData();
  let postToRender = post || {};
  return (
    <div>
      <Hero image={ny2} size="small" />
      <br />
      <Link to="/blog/">{'<'} Back</Link>
      <PageContents style={{ padding: "15px" }}>
        <h1 style={{ textAlign: "center" }}>{postToRender.title}</h1>
        <h3 style={{ textAlign: "center" }}>{postToRender.date}</h3>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postToRender.content }} />
      </PageContents>
      <br />
    </div>
  );
}
