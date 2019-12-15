import styled from "@emotion/styled";

export const Section = styled("div")`
  position: relative;
  min-height: 60vh;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-color: ${props => props.backgroundColor};
  background-size: cover;
  background-blend-mode: multiply;
  color: ${props=>props.color}
`;
export const SectionContent = styled("div")`
  max-width: 1200px;
  padding: 30px;
  margin: auto;
`;

export const SectionPicture = styled("img")`
  background-color: black;
  width: 100%;
  height: 100%;

  background-size: cover;
`;

export const Button = styled("button")`
  cursor: pointer;
  color: ${props => props.color || "black"};
  border: 0px solid ${props => props.color || "black"};
  /* background-color: rgba(0, 171, 0, 0); */
  background-color: #85c6d4;
  border-radius: ${props => (props.small ? "5px" : "10px")};
  padding: ${props =>
    props.small ? "5px 10px 5px 10px" : "10px 20px 10px 20px"};
  margin: ${props => !props.small && "0px 5px"};
  font-size: ${props => (props.small ? "1em" : "1.7em")};
  min-width: ${props => (props.small ? "120px" : "230px")};
  @media (max-width: 750px) {
    font-size: 1em;
    min-width: 150px;
    margin: 2px;
  }
  @media (max-width: 500px) {
    font-size: 1em;
    min-width: 160px;
    margin: 2px;
  }
  &:hover {
    background-color: rgba(63, 127, 191, 0.6);
  }
  &:active {
    background-color: rgba(0, 171, 0, 0.6);
  }
  transition: all 0.3s;
`;
