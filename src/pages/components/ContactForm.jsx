import React from "react";
import styled from "@emotion/styled";

//Import core
import { Section, SectionContent, Button } from "./core";

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
  flex: 1;
  padding: 10px;
  font-size: 1em;
  margin: 0 auto 10px auto;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  display: block;
  color: white;
  max-width: 400px;
  width: 80vw;
`;

const InputArea = styled("textarea")`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  margin: 0 auto 10px auto;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  display: block;
  color: white;
  resize: none;
  max-width: 400px;
  width: 80vw;
`;

const InputButton = Button.withComponent("input");

// MAKE THESE PLACEHOLDERS WHITE
const cssClass = styled("div")`
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }
`;

const BoldHeading = styled("h4")`
  font-weight: 800;
  color: #b73954;
`;

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    // this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {

    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let whatsapp = e.target[2].value;
    let phone = e.target[3].value;
    let comments = e.target[4].value;
    let urlBody = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nWhatsapp: ${whatsapp}\nComments: ${comments}`
    );
    let uri = `mailto:me@me.com?subject=Consultation&body=${urlBody}`;
    window.location.href = uri;
  }
  render() {
    return (
      <Section backgroundColor={"#85c6d4"} color={"black"}>
        <SectionContent>
          <h2 style={{ color: "#b73954" }}>
            Book your FREE consultation today!
          </h2>
          <h3 style={{ color: "white" }}>
            Just fill out
            the information below:
          </h3>
          <hr />
          <br />

          <form
            onSubmit={this.submitForm}
          >
            <Input name="name" placeholder={"Name"} />
            <Input name="email" placeholder={"Email"} />
            <Input name="phone" placeholder={"Phone Number"} />
            <Input name="whatsapp" placeholder={"Whatsapp"} />
            <InputArea
              name="comments"
              placeholder={"Describe Your Issue"}
              name="Text1"
              rows="5"
            />
            <InputButton
              type="submit"
              color='white'
              value="SEND EMAIL"
            />
          </form>
        </SectionContent>
      </Section>
    );
  }
}
