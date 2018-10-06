import * as React from "react";
import { CentredRow, Row } from "../grid";
import styled from "styled-components";
import { Link } from "gatsby";

export interface NavigationLinkProps {
  path: string;
  name: string;
}

interface NavigationProps {
  links: NavigationLinkProps[];
}

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto;
`;

const NavigationItem = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link).attrs({
  activeClassName: "active"
})`
  color: lightgrey;
  font-weight: bold;

  &.active {
    color: black;
    border-bottom: 2px solid grey;
  }
  &:hover {
    color: lightblue;
    text-decoration: none;
    border-bottom: 2px solid lightblue;
  }
`;

const NavigationLink = (props: NavigationLinkProps) => (
  <NavigationItem>
    <StyledLink to={props.path}>{props.name}</StyledLink>
  </NavigationItem>
);

const Navigation = (props: NavigationProps) => (
  <CentredRow>
    <NavigationList>
      {props.links.map(link => <NavigationLink {...link} key={link.path} />)}
    </NavigationList>
  </CentredRow>
);

export default Navigation;
