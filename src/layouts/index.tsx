import * as React from "react";
import Helmet from "react-helmet";
import { Container, CentredRow } from "../components/grid";
import Avatar from "../components/header/avatar";
import Navigation, {
  NavigationLinkProps
} from "../components/header/navigation";
// import * as Link from "gatsby-link";

interface LayoutProps {
  children(): React.Component;
  data: {
    site: {
      siteMetadata: {
        title: string;
        avatar: string;
        navigation: NavigationLinkProps[];
      };
    };
  };
}

const Layout = (props: LayoutProps) => (
  <div>
    <Helmet title={props.data.site.siteMetadata.title} />

    <Container>
      <CentredRow>
        <Avatar
          imageUrl={props.data.site.siteMetadata.avatar}
          name={props.data.site.siteMetadata.title}
        />
      </CentredRow>

      <Navigation links={props.data.site.siteMetadata.navigation} />

      {props.children()}
    </Container>
  </div>
);

export default Layout;

export const query = graphql`
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
`;
