import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import Navigation from "../../header/navigation";
import { CentredRow, Container } from "../grid";
import Avatar from "../../header/avatar";
import "./global_styles.scss";

const PageLayout = (props: { children: React.ReactNode }) => (
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

export default PageLayout;
