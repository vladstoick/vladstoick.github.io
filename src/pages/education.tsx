import { graphql } from "gatsby";
import * as React from "react";
import PageLayout from "../components/layout/page_layout";

interface IEducationPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const EducationPage = (props: IEducationPageProps) => {
  return (
    <PageLayout>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </PageLayout>
  );
};

export default EducationPage;

export const pageQuery = graphql`
  query EducationPage {
    markdownRemark(frontmatter: { title: { eq: "EducationBlurb" } }) {
      html
    }
  }
`;
