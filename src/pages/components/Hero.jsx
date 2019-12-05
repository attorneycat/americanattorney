import React from "react";
import styled from "@emotion/styled";

//Import Core
import { Button } from "./core";
//Import assets
import mountainSplash from "assets/mountainSplash.jpg";

const SectionBG = styled("header")`
  height: 85vh;
  position: relative;
  width: 100vw;
  background-image: url(${mountainSplash});
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
    <SectionBG>
      <Content>
        <h1>AMERICAN TRADEMARK ATTORNEY</h1>
        <h3>
          PROTECT AND GROW YOUR BUSINESS <br /> TODDAY WITH A US LICESNED LAWER.
        </h3>
        <ButtonRow>
          <a href="">
            <Button> BOOK A FREE CONSULTATION </Button>
          </a>
        </ButtonRow>
      </Content>
    </SectionBG>
  );
}
