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
    if (component === "h1") {
      return (
        <StyledText type="h1" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "h2") {
      return (
        <StyledText type="h2" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "p") {
      return (
        <StyledText type="p" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "strong") {
      return (
        <StyledText type="span" fontWeight="bold" key={props.key}>
          {children}
        </StyledText>
      );
    } else if (component === "a") {
      return (
        <Link to={props.href} key={props.key}>
          {children}
        </Link>
      );
    } else if (component === "div") {
      return React.createElement(component, props, children);
    } else {
      return <div>NOT ABLE TO HANDLE {component}</div>;
    }
  }
}).Compiler;
