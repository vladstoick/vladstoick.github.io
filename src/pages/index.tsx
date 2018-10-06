import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

interface IIndexPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const IndexPage = (props: IIndexPageProps) => {
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { title: { eq: "HomepageBlurb" } }) {
      html
    }
  }
`;
