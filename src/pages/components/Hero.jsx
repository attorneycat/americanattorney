import React from "react";
import styled from "@emotion/styled";

//Import Core
import { Button } from "./core";

const SectionBG = styled("header")`
  height: ${props => (props.size === "small" ? "40vh" : "85vh")};
  position: relative;
  width: 100vw;
  background-image: url(${props => props.image});
  background-size: cover;
`;

const Content = styled("div")`
  position: relative;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  max-width: 800px;
  padding: 30px;
  text-shadow: 2px 2px 10px #000;
  text-align: center;
`;

const ButtonRow = styled("div")`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function Hero(props) {
  return (
    <SectionBG image={props.image} size={props.size}>
      <Content>
        <h1>AMERICAN TRADEMARK ATTORNEY</h1>
        <h3>PROTECT AND GROW YOUR BUSINESS TODAY WITH A US LICENSED LAWYER.</h3>
        <ButtonRow>
          <br></br>
          <a href="#bottom">
            <Button> BOOK A FREE CONSULTATION </Button>
          </a>
        </ButtonRow>
      </Content>
    </SectionBG>
  );
}
