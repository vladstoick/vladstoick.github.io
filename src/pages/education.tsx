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

const EducationPage = (props: IndexPageProps) => {
  let data = props.data;

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
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
