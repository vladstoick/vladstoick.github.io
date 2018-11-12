import { Link } from "gatsby";
import * as React from "react";
import rehypeReact from "rehype-react";
import StyledText from "../components/text";

export const renderAst = new rehypeReact({
  createElement: (
    component: string,
    props: any = {},
    children: React.ReactChild[] = []
  ) => {
    if (
      component === "h1" ||
      component === "h2" ||
      component === "h3" ||
      component === "p"
    ) {
      return (
        <StyledText type={component} key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "strong") {
      return (
        <StyledText type="span" fontWeight="bold" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "em") {
      return (
        <StyledText type="span" fontStyle="italic" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (
      component === "div" ||
      component === "a" ||
      component === "ul" ||
      component === "li"
    ) {
      return React.createElement(component, props, children);
    } else {
      return <div>NOT ABLE TO HANDLE {component}</div>;
    }
  }
}).Compiler;
