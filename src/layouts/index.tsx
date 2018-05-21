import * as React from "react";
import Helmet from "react-helmet";
import { Container, CentredRow } from "../components/grid";
import Avatar from "../components/avatar";

interface LayoutProps {
  children(): React.Component;
  data: {
    site: {
      siteMetadata: {
        title: string;
        avatar: string;
      };
    };
  };
}

const Layout = (props: LayoutProps) => (
  <div>
    <Helmet title={props.data.site.siteMetadata.title} />

    <CentredRow>
      <Avatar
        imageUrl={props.data.site.siteMetadata.avatar}
        name={props.data.site.siteMetadata.title}
      />
    </CentredRow>

    <Container>{props.children()}</Container>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        avatar
      }
    }
  }
`;
