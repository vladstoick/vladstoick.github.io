// @flow strict
import { graphql } from "gatsby";
import React from "react";
import PageLayout from "../components/layout/page_layout";
import WorkExperienceList from "../components/work/work_experience_list";

type WorkExperienceJson = {
  companyName: string,
  time: string,
  tags: [string],
  title: string,
  id: string
};

type WorkExperienceMarkdown = {
  html: string,
  frontmatter: {
    title: string
  }
};

export type WorkExperienceItemType = WorkExperienceJson &
  WorkExperienceMarkdown;

type WorkPageProps = {
  data: {
    allWorkJson: {
      edges: [
        {
          node: WorkExperienceJson
        }
      ]
    },
    allMarkdownRemark: {
      edges: [
        {
          node: WorkExperienceMarkdown
        }
      ]
    }
  }
};

const WorkPage = (props: WorkPageProps) => {
  const data = props.data;

  const mergedData: WorkExperienceItemType[] = data.allWorkJson.edges.map(
    item => {
      const relevantMarkdown = data.allMarkdownRemark.edges.find(mdItem => {
        return mdItem.node.frontmatter.title === item.node.id;
      });

      if (relevantMarkdown == null) {
        throw "Could not find markdown for json";
      }

      return { ...item.node, ...relevantMarkdown.node };
    }
  );

  return (
    <PageLayout>
      <WorkExperienceList workExperience={mergedData} />
    </PageLayout>
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
