import * as React from "react";
import WorkExperienceList from "../components/work";

interface WorkExperienceJson {
  companyName: string;
  time: string;
  tags: [string];
  title: string;
  id: string;
}

interface WorkExperienceMarkdown {
  html: string;
  frontmatter: {
    title: string;
  };
}

export interface WorkExperienceItem
  extends WorkExperienceJson,
    WorkExperienceMarkdown {}

interface WorkPageProps {
  data: {
    allWorkJson: {
      edges: [
        {
          node: WorkExperienceJson;
        }
      ];
    };
    allMarkdownRemark: {
      edges: [
        {
          node: WorkExperienceMarkdown;
        }
      ];
    };
  };
}

const WorkPage = (props: WorkPageProps) => {
  let data = props.data;

  console.log(props);

  const mergedData = data.allWorkJson.edges.map(item => {
    const relevantMarkdown = data.allMarkdownRemark.edges.find(mdItem => {
      return mdItem.node.frontmatter.title == item.node.id;
    });
    return { ...item.node, ...relevantMarkdown.node };
  });

  return <WorkExperienceList workExperience={mergedData} />;
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
