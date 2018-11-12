import { graphql } from "gatsby";
import * as React from "react";
import PageLayout from "../components/layout/page_layout";
import { renderAst } from "../utils/markdown";

interface IEducationPageProps {
  data: {
    markdownRemark: {
      htmlAst: string;
    };
  };
}

const EducationPage = (props: IEducationPageProps) => {
  return (
    <PageLayout>
      <div>{renderAst(props.data.markdownRemark.htmlAst)}</div>
    </PageLayout>
  );
};

export default EducationPage;

export const pageQuery = graphql`
  query EducationPage {
    markdownRemark(frontmatter: { title: { eq: "EducationBlurb" } }) {
      htmlAst
    }
  }
`;
