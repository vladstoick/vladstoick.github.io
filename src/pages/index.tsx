import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

interface IndexPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const IndexPage = (props: IndexPageProps) => {
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
