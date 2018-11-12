import * as React from "react";
import styled from "styled-components";

type Headers = "h1" | "h2" | "h3";
type OtherTypes = "p" | "span";
type TextType = Headers | OtherTypes;

interface ITextProps {
  children: React.ReactChild | React.ReactChild[];
  type: TextType;
  fontWeight?: "normal" | "bold";
  fontStyle?: "italic";
  color?: string;
  className?: string;
}

const Text = (props: ITextProps) => {
  if (props.type === "h1") {
    return <h1 className={props.className}>{props.children}</h1>;
  } else if (props.type === "h2") {
    return <h2 className={props.className}>{props.children}</h2>;
  } else if (props.type === "h3") {
    return <h3 className={props.className}>{props.children}</h3>;
  } else if (props.type === "p") {
    return <p className={props.className}>{props.children}</p>;
  } else if (props.type === "span") {
    return <span className={props.className}>{props.children}</span>;
  }
};

function calculateFontWeight(props: ITextProps) {
  if (props.fontWeight === "bold") {
    return 700;
  } else if (
    props.type === "h1" ||
    props.type === "h2" ||
    props.type === "h3"
  ) {
    return 200;
  } else {
    return 400;
  }
}

const StyledText = styled<ITextProps>(Text)`
  font-weight: ${props => calculateFontWeight(props)};
  font-style: ${props =>
    props.fontStyle !== null ? props.fontStyle : "normal"};
  color: ${props =>
    props.color !== null ? props.color : "hsla(0, 0 %, 0 %, 0.7)"};
`;

export default StyledText;
