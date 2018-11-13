import { graphql } from "gatsby";
import * as React from "react";
import PageLayout from "../components/common/PageLayout";
import WorkExperienceList from "../components/work/work_experience_list";

export interface IWorkExperienceMarkdown {
  htmlAst: string;
}

interface IWorkPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: IWorkExperienceMarkdown;
        }
      ];
    };
  };
}

const WorkPage = (props: IWorkPageProps) => {
  const data = props.data.allMarkdownRemark.edges.map(x => x.node);

  return (
    <PageLayout>
      <WorkExperienceList workExperience={data} />
    </PageLayout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPage {
    allWorkJson {
      edges {
        node {
          id
        }
      }
    }

    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/.*work.*/" } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          htmlAst
        }
      }
    }
  }
`;
