import React from "react";
import path from "path";
import axios from "axios";
import { extractCritical } from "emotion-server";
import { renderToString } from "react-dom/server";

import postsJson from "./src/pages/blog/components/posts.json";

export default {
  siteRoot: "https://usaatty.com",
  paths: {
    root: process.cwd(), // The root of your project. Don't change this unless you know what you're doing.
    src: "src", // The source directory. Must include an index.js entry file.
    temp: "tmp", // Temp output directory for build files not to be published.
    dist: "docs", // The production output directory.
    devDist: "tmp/dev-server", // The development scratch directory.
    public: "public" // The public directory (files copied to dist during build)
  },
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/pages/index.js"
      },
      {
        path: "/blog",
        component: "src/pages/blog/index.js",
        getData: () => ({
          postsJson
        }),
        children: postsJson.map(post => ({
          path: `/post/${post.id}`,
          template: "src/pages/post/index.js",
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ],
  Document: ({ Html, Head, Body, children, renderMeta }) => {
    let extractedComp = extractCritical(renderToString(children));
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Cat Law</title>
          <meta name="description" content="American Trademark Attorney" />
          <meta property="og:title" content="Attorney Cat" />
          {React.styleTags}
          <style type="text/css">{extractedComp.css}</style>
        </Head>
        <Body style={{ margin: 0 }}>
          <section id="top" />
          {children}
        </Body>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>

        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement('script'),s0=document.getElementsByTagName('script')[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5dfb441043be710e1d22c6de/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
          `}}/>
      </Html>
    );
  }
};
