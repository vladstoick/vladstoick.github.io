import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

interface IEducationPageProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const EducationPage = (props: IEducationPageProps) => {
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
