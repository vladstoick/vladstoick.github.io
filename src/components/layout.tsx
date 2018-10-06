import * as React from "react";
import Helmet from "react-helmet";
import { Container, CentredRow } from "./grid";
import Avatar from "./header/avatar";
import Navigation, { NavigationLinkProps } from "./header/navigation";
import { StaticQuery, graphql } from "gatsby";

const Layout = (props: { children: any }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            avatar
            navigation {
              path
              name
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <Container>
          <CentredRow>
            <Avatar
              imageUrl={data.site.siteMetadata.avatar}
              name={data.site.siteMetadata.title}
            />
          </CentredRow>

          <Navigation links={data.site.siteMetadata.navigation} />

          {props.children}
        </Container>
      </>
    )}
  />
);

export default Layout;
