// @flow strict
import { Link } from "gatsby";
import * as React from "react";
import { CentredRow } from "../../layout/grid";
import styles from "./style.module.scss";

type LinkProps = {
  path: string,
  name: string
};

type NavigationProps = {
  links: Array<LinkProps>
};

const NavigationLink = (props: LinkProps) => (
  <li className={styles.navigationLink}>
    <Link
      to={props.path}
      className={styles.link}
      activeClassName={styles.active}
    >
      {props.name}
    </Link>
  </li>
);

const Navigation = (props: NavigationProps) => (
  <CentredRow>
    <ul className={styles.navigationContainer}>
      {props.links.map(link => (
        <NavigationLink {...link} key={link.path} />
      ))}
    </ul>
  </CentredRow>
);

export default Navigation;
