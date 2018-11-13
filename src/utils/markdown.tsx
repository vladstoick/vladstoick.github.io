import * as React from "react";
import rehypeReact from "rehype-react";
import { Blurb } from "../components/common/blockquote";
import StyledText from "../components/text";
import { Tag, TagList } from "../components/work/work_experience";

export const createElement = (
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
  } else if (component === "taglist") {
    return <TagList key={props.key}>{children}</TagList>;
  } else if (component === "tag") {
    return (
      <Tag key={props.key} type="span">
        {children}
      </Tag>
    );
  } else if (component === "blockquote") {
    return <Blurb key={props.key}>{children}</Blurb>;
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
};

export const renderAst = new rehypeReact({ createElement }).Compiler;
