import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import Avatar from "../header/avatar";
import Navigation from "../header/navigation";
import { CentredRow, Container } from "./grid";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,400i,700');

  html {
    font: 112.5%/1.56 'Source Sans Pro', sans-serif;
    /* font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px; */
    font-weight: 400;
    margin: 0;
    color: hsla(0, 0%, 0%, 0.7);
  }

  h1, h2, h3, h4, h5 {
    font-weight: 200;
    margin: 0;
    padding: 0;
    color: hsla(0, 0%, 0%, 0.85);
  }

  a {
    text-decoration: none;
    color: #419EDA;
  }

  a:hover
  {
    text-decoration: underline;
    color: #2a6496;
  }

  blockquote {
    margin: 0em 0em 1em 0em;
    padding: 0 0.5em;
    color: hsla(0, 0%, 0%, 0.6);
    border-left: 0.39rem solid hsla(0, 0%, 0%, 0.13);
  }
`;

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
    // tslint:disable-next-line:jsx-no-lambda
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

const PageLayoutWithStyle = (props: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <PageLayout>{props.children}</PageLayout>
    </>
  );
};

export default PageLayoutWithStyle;
