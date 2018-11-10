// @flow strict
import { graphql } from "gatsby";
import React from "react";
import PageLayout from "../components/layout/page_layout";

type IndexPageProps = {
  data: {
    markdownRemark: {
      html: string
    }
  }
};

const IndexPage = (props: IndexPageProps) => (
  <PageLayout>
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
  </PageLayout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { title: { eq: "HomepageBlurb" } }) {
      html
    }
  }
`;
