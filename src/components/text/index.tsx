import * as React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactChild | React.ReactChild[];
  type: "h1" | "h2" | "p" | "span";
  fontWeight?: "normal" | "bold";
  color?: string;
  className?: string;
}

const Text = (props: TextProps) => {
  if (props.type === "h1") {
    return <h1 className={props.className}>{props.children}</h1>;
  } else if (props.type === "h2") {
    return <h2 className={props.className}>{props.children}</h2>;
  } else if (props.type === "p") {
    return <p className={props.className}>{props.children}</p>;
  } else if (props.type === "span") {
    return <span className={props.className}>{props.children}</span>;
  }
};

function calculateFontWeight(props: TextProps) {
  if (props.fontWeight === "bold") {
    return 700;
  } else if (props.type === "h1" || props.type === "h2") {
    return 200;
  } else {
    return 400;
  }
}

const StyledText = styled<TextProps>(Text)`
  font-weight: ${props => calculateFontWeight(props)};
  color: ${props =>
    props.color !== null ? props.color : "hsla(0, 0 %, 0 %, 0.7)"};
`;

export default StyledText;
