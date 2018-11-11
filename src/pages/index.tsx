import { graphql } from "gatsby";
import * as React from "react";
import PageLayout from "../components/layout/page_layout";

interface IIndexPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const IndexPage = (props: IIndexPageProps) => (
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
