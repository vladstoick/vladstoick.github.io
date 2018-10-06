import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import WorkExperienceList from "../components/work";

interface IWorkExperienceJson {
  companyName: string;
  time: string;
  tags: [string];
  title: string;
  id: string;
}

interface IWorkExperienceMarkdown {
  html: string;
  frontmatter: {
    title: string;
  };
}

export interface IWorkExperienceItemType
  extends IWorkExperienceJson,
    IWorkExperienceMarkdown {}

interface IWorkPageProps {
  data: {
    allWorkJson: {
      edges: [
        {
          node: IWorkExperienceJson;
        }
      ];
    };
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
  const data = props.data;

  const mergedData: IWorkExperienceItemType[] = data.allWorkJson.edges.map(
    item => {
      const relevantMarkdown = data.allMarkdownRemark.edges.find(mdItem => {
        return mdItem.node.frontmatter.title === item.node.id;
      });

      return { ...item.node, ...relevantMarkdown.node };
    }
  );

  return (
    <Layout>
      <WorkExperienceList workExperience={mergedData} />
    </Layout>
  );
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
          id
        }
      }
    }

    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/.*work.*/" } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
