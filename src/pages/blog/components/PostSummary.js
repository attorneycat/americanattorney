import React from "react";

import { Link } from "components/Router";

import styled from "@emotion/styled";
import { Button } from "../../components/core";

import placeholder from "assets/placeholderBlog.png";

const PostContainer = styled("div")`
  display: flex;
  height: 25vh;
  padding: 0px 30px 30px 30px;
  @media (max-width: 750px) {
    flex-direction: column;
    height: 80vh;
  }
`;

const PostImage = styled("img")`
  flex: 5;
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
  @media (max-width: 750px) {
    width: initial;
    height: 60vh;
  }
`;

const WhiteBreak = styled("div")`
  flex: 1;
  @media (max-width: 750px) {
    display:none;
  }
`;
const Wording = styled("div")`
  flex: 5;
`;

const Title = styled("h2")`
  margin: 0 0 5px 0;
  font-size: 2em;
  @media (max-width: 750px) {
    font-size:1.5em;
  }
`;

const Date = styled("h3")`
  margin-top: 5px;
`;

export default function PostSummary({ image, title, summary, date, id }) {
  let postImage = image ? require(`../../../${image}`) : placeholder
  return (
    <PostContainer>
      <PostImage img={postImage} />
      <WhiteBreak  />
      <Wording>
        <Link to={`/blog/post/${id}`}>
          <Title> {`${title}`} </Title>
        </Link>
        <Date> {`${date}`} </Date>
        <p> {`${summary}`} </p>
        <Link to={`/blog/post/${id}`}>
          <Button> Read More </Button>
        </Link>
      </Wording>
    </PostContainer>
  );
}
