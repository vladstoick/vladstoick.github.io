import * as React from "react";
import Link from "gatsby-link";
import Avatar from "../components/header/avatar";
import { CentredRow, Column } from "../components/grid";
import WorkExperienceList from "../components/work";
import EducationList from "../components/education";

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
