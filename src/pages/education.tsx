import * as React from "react";
import EducationList from "../components/education";

interface IndexPageProps {
  data: {
    allEducationJson: {
      edges: [
        {
          node: {
            institution: string;
            time: string;
            degree: string;
            awards: [string];
          };
        }
      ];
    };
  };
}

const EducationPage = (props: IndexPageProps) => {
  let data = props.data;

  return (
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
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
