import { graphql, StaticQuery } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import Avatar from "../header/avatar";
import Navigation from "../header/navigation";
import { CentredRow, Container } from "./grid";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    color: red;
  }
`;

const PageLayout = (props: { children: React.ReactNode }) => (
  <Container>{props.children}</Container>
  // <StaticQuery
  //   query={graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //           avatar
  //           navigation {
  //             path
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   // tslint:disable-next-line:jsx-no-lambda
  //   render={data => (
  //     <>
  //       <Helmet title={data.site.siteMetadata.title} />
  //       <Container>
  //         <CentredRow>
  //           <Avatar
  //             imageUrl={data.site.siteMetadata.avatar}
  //             name={data.site.siteMetadata.title}
  //           />
  //         </CentredRow>

  //         <Navigation links={data.site.siteMetadata.navigation} />

  //         {props.children}
  //       </Container>
  //     </>
  //   )}
  // />
);

export default PageLayout;
