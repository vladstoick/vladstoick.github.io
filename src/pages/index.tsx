import { graphql } from "gatsby";
import * as React from "react";
import PageLayout from "../components/layout/page_layout";
import { renderAst } from "../utils/markdown";

interface IIndexPageProps {
  data: {
    markdownRemark: {
      htmlAst: string;
    };
  };
}

const IndexPage = (props: IIndexPageProps) => (
  <PageLayout>
    <div>{renderAst(props.data.markdownRemark.htmlAst)}</div>
  </PageLayout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { title: { eq: "HomepageBlurb" } }) {
      htmlAst
    }
  }
`;
