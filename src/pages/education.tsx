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
