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

  return <EducationList educationList={data.allEducationJson.edges} />;
};

export default EducationPage;

export const pageQuery = graphql`
  query EducationPage {
    allEducationJson {
      edges {
        node {
          institution
          degree
          time
          awards
        }
      }
    }
  }
`;
