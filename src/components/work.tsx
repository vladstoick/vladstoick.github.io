import * as React from "react";
import { Row, Column } from "./grid";
import styled from "styled-components";
import * as colours from "../utils/colours";
import WorkEducationHeadline from "./work-education-headline";

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

const WorkExperienceItem = (props: WorkExperienceItemProps) => (
  <div>
    <WorkEducationHeadline
      title={props.title}
      location={props.companyName}
      period={props.time}
    />
    <TagList>
      {props.tags.map(tag => <WorkExperienceTag>{tag}</WorkExperienceTag>)}
    </TagList>
  </div>
);

interface WorkExperienceProps {
  workExperience: [
    {
      node: WorkExperienceItemProps;
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
