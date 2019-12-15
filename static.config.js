import React from "react";
import path from "path";
import axios from "axios";
import { extractCritical } from "emotion-server";
import { renderToString } from "react-dom/server";

export default {
  siteRoot:'https://usaatty.com',
  paths: {
    root: process.cwd(), // The root of your project. Don't change this unless you know what you're doing.
    src: "src", // The source directory. Must include an index.js entry file.
    temp: "tmp", // Temp output directory for build files not to be published.
    dist: "docs", // The production output directory.
    devDist: "tmp/dev-server", // The development scratch directory.
    public: "public", // The public directory (files copied to dist during build)
  },
  getRoutes: async () => [
        {
      path: "/",
      component: "src/pages/index.js"
    }],
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
          <meta
            name="description"
            content="Cat - Kickass attorney"
          />
          <meta property="og:title" content="Attorney Cat" />
          {React.styleTags}
          <style type="text/css">{extractedComp.css}</style>
        </Head>
        <Body style={{ margin: 0 }}>{children}</Body>
      </Html>
    );
  }
};
