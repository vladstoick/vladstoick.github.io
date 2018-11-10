// @flow strict
import { graphql } from "gatsby";
import React from "react";
import PageLayout from "../components/layout/page_layout";

type EducationPageProps = {
  data: {
    markdownRemark: {
      html: string
    }
  }
};

const EducationPage = (props: EducationPageProps) => {
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
