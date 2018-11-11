import { Link } from "gatsby";
import * as React from "react";
import { CentredRow } from "../../layout/grid";
import styled from "styled-components";

type LinkProps = {
  path: string;
  name: string;
};

type NavigationProps = {
  links: Array<LinkProps>;
};

const NavigationContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto 1rem auto;
  padding: 0;
`;

const NavigationLinkContainer = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link).attrs({
  activeClassName: "active"
})`
  color: lightgrey;
  font-weight: bold;

  &:hover {
    color: lightblue;
    text-decoration: none;
    border-bottom: 2px solid lightblue;
  }

  &.active {
    color: black;
    border-bottom: 2px solid grey;
  }
`;

const NavigationLink = (props: LinkProps) => (
  <NavigationLinkContainer>
    <StyledLink to={props.path}>{props.name}</StyledLink>
  </NavigationLinkContainer>
);

const Navigation = (props: NavigationProps) => (
  <CentredRow>
    <NavigationContainer>
      {props.links.map(link => (
        <NavigationLink {...link} key={link.path} />
      ))}
    </NavigationContainer>
  </CentredRow>
);

export default Navigation;
