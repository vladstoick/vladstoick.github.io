import * as React from "react";
import { Row, Column } from "./grid";
import styled from "styled-components";
import * as colours from "../utils/colours";

const WorkExperienceTag = styled.span`
  background-color: ${colours.orange};
  color: white;
  margin: 2px 5px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.7em;
`;

const TagList = Row.extend`
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;

interface WorkExperienceItemProps {
  companyName: string;
  time: string;
  tags: [string];
  title: string;
}

const WorkExperienceHeadline = Row.extend`
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 5px;
  }
`;

const WorkExperience = styled.p`
  margin-bottom: 0.1em;
  font-size: 1.2em;
`;

const WorkExperiencePosition = styled.span`
  font-weight: bold;
`;

const WorkPeriod = styled.span`
  color: gray;
`;

const WorkExperienceItem = (props: WorkExperienceItemProps) => (
  <div>
    <WorkExperienceHeadline>
      <WorkExperience>
        <WorkExperiencePosition>{props.title}</WorkExperiencePosition> at{" "}
        <span>{props.companyName}</span>
      </WorkExperience>
      <WorkPeriod>{props.time}</WorkPeriod>
    </WorkExperienceHeadline>
    <TagList>
      {props.tags.map(tag => <WorkExperienceTag>{tag}</WorkExperienceTag>)}
    </TagList>
  </div>
);

interface WorkExperienceProps {
  workExperience: [
    {
      node: {
        companyName: string;
        time: string;
        tags: [string];
        title: string;
      };
    }
  ];
}

const List = styled.div`
  & > div:not(:first-child) {
    border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  }
`;

const WorkExperienceList = (props: WorkExperienceProps) => (
  <div>
    <h2>💼 Work Experience</h2>
    <List>
      {props.workExperience.map(we => (
        <WorkExperienceItem
          companyName={we.node.companyName}
          title={we.node.title}
          key={we.node.companyName}
          time={we.node.time}
          tags={we.node.tags}
        />
      ))}
    </List>
  </div>
);

export default WorkExperienceList;
