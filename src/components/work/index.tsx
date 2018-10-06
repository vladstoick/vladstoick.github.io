import * as React from "react";
import styled from "styled-components";
import { IWorkExperienceItemType } from "../../pages/work";
import * as colours from "../../utils/colours";
import { Row } from "./../grid";
import WorkEducationHeadline from "./../work-education-headline";

const WorkExperienceTag = styled.span`
  background-color: ${colours.orange};
  color: white;
  margin: 2px 5px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.7em;
`;

const TagList = styled(Row)`
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;

const Blurb = styled.blockquote`
  font-size: 1em;
  p {
    margin-bottom: 0.5em;
  }

  li {
    margin-bottom: 0px;
  }
`;

const WorkExperienceItem = (props: IWorkExperienceItemType) => (
  <div key={props.id}>
    <WorkEducationHeadline
      title={props.title}
      location={props.companyName}
      period={props.time}
    />
    <Blurb>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </Blurb>
    <TagList>
      {props.tags.map(tag => (
        <WorkExperienceTag key={tag}>{tag}</WorkExperienceTag>
      ))}
    </TagList>
  </div>
);

interface IWorkExperienceProps {
  workExperience: IWorkExperienceItemType[];
}

const List = styled.div`
  & > div:not(:first-child) {
    border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  }
`;

const WorkExperienceList = (props: IWorkExperienceProps) => (
  <div>
    <h2>💼 Work Experience</h2>
    <List>
      {props.workExperience.map(we => (
        <WorkExperienceItem {...we} key={we.id} />
      ))}
    </List>
  </div>
);

export default WorkExperienceList;
