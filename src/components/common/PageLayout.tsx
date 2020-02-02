import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import Avatar from "../header/avatar";
import Navigation from "../header/navigation";
import { CentredRow, Container } from "./Grid";

const GlobalStyle = createGlobalStyle`
  html {
    font: 112.5%/1.56 "Source Sans Pro", sans-serif;
    font-weight: 400;
    margin: 0;
    color: hsla(0, 0%, 0%, 0.7);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 200;
    margin: 0;
    padding: 0;
    color: hsla(0, 0%, 0%, 0.85);
  }

  a {
    text-decoration: none;
    color: #419eda;
  }

  a:hover {
    text-decoration: underline;
    color: #2a6496;
  }
`;

const PageLayout = (props: { children: React.ReactChild }) => (
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
        <GlobalStyle />
        <Helmet title={data.site.siteMetadata.title}>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
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
