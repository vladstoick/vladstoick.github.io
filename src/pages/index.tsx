import * as React from "react";
import Link from "gatsby-link";
import Avatar from "../components/avatar";
import { CentredRow, Column } from "../components/grid";
import WorkExperienceList from "../components/work";
import EducationList from "../components/education";

interface IndexPageProps {
  data: {
    allWorkJson: {
      edges: [
        {
          node: {
            companyName: string;
            time: string;
            tags: [string];
            title: string;
          };
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

const IndexPage = (props: IndexPageProps) => {
  let data = props.data;

  return (
    <Column>
      <h2>👋 Hi</h2>
      <p>
        I am a Software Engineer based in London 🇬🇧. I have graduated from{" "}
        <b>King's College London</b> (BSc in Computer Science with Management)
        in 2018 with a First degree. I am currently on holiday until August when
        I will start to work at <b>Facebook London</b>.
      </p>
      <p>
        I have previously worked at{" "}
        <a href="https://wonderbly.com">
          <b>Wonderbly</b>
        </a>{" "}
        (or Lostmy.name as it was previously called) as a Backend engineer for
        almost 3 years during my studies.
      </p>
      <WorkExperienceList workExperience={data.allWorkJson.edges} />
      <EducationList educationList={data.allEducationJson.edges} />
    </Column>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    allWorkJson(sort: { fields: [order] }) {
      edges {
        node {
          companyName
          time
          tags
          title
        }
      }
    }
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
