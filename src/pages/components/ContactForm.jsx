import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent, Button } from "./core";

//Import assets
import reiki from "assets/reiki.png";
import firstplace from "assets/firstplace.png";
import certGreen from "assets/cert-green.png";
import certPurp from "assets/cert-purp.png";

const FormRow = styled("div")`
  margin-top: 50px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Input = styled("input")`
  flex:1;
  padding:10px;
  font-size:1em;
  margin:0 auto 10px auto;
  border-width: 2px;
  border-color: rgba(0,0,0,0);
  background-color:rgba(255,255,255,0.2);
  border-radius: 5px;
  display: block;
  color:white;
  max-width:400px;
  width:80vw
`;

const InputArea = styled("textarea")`
  flex:1;
  padding:10px;
  font-size:1em;
  margin:0 auto 10px auto;
  border-width: 2px;
  border-color: rgba(0,0,0,0);
  background-color:rgba(255,255,255,0.2);
  border-radius: 5px;
  display: block;
  color:white;
  resize:none;
  max-width:400px;
  width:80vw
`;

// MAKE THESE PLACEHOLDERS WHITE
const cssClass = styled("div")`
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}

`

const BoldHeading = styled("h4")`
  font-weight: 800;
  color: #b73954;
`;

export default function ContactForm(props) {
  return (
    <Section backgroundColor={"darkblue"} color={"black"}>
      <SectionContent>
        <h2 style={{ color: "#b73954" }}>FREE CASE EVALUATION</h2>
        <h3 style={{ color: "grey" }}>
          Are you in a bit of a pickle? <br />
          Call me at 1-800-999-9999 or fill out the form below for a NEIN obligation consultation!
        </h3>
        <br/>
        <hr/>
        <br/>
        <form>

            <Input placeholder={'First Name'}/>
            <Input placeholder={'Last Name'}/>
            <Input placeholder={'Email'}/>
            <Input placeholder={'Phone Number'}/>
            <InputArea placeholder={'Describe Your Issue'} name="Text1" rows="5"/>
            <Button>SEND EMAIL</Button>
        </form>
      </SectionContent>
    </Section>
  );
}
