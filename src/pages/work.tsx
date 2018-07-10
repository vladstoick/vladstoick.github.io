import * as React from "react";
import WorkExperienceList from "../components/work";

export interface WorkExperienceItem {
  companyName: string;
  time: string;
  tags: [string];
  title: string;
  blurb: string;
  achievements: [string];
}

interface IndexPageProps {
  data: {
    allWorkJson: {
      edges: [
        {
          node: WorkExperienceItem;
        }
      ];
    };
  };
}

const WorkPage = (props: IndexPageProps) => {
  let data = props.data;

  return <WorkExperienceList workExperience={data.allWorkJson.edges} />;
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPage {
    allWorkJson(sort: { fields: [order] }) {
      edges {
        node {
          companyName
          time
          tags
          title
          blurb
          achievements
        }
      }
    }
  }
`;
