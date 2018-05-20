import * as React from "react";
import Helmet from "react-helmet";
import { Container } from "../components/grid";

interface LayoutProps {
  children(): React.Component;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Layout = (props: LayoutProps) => (
  <div>
    <Helmet
      title={props.data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />

    <Container>{props.children()}</Container>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
