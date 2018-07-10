import * as React from "react";
import styled from "styled-components";
import WorkEducationHeadline from "./../work-education-headline";

interface EducationItemProps {
  institution: string;
  time: string;
  degree: string;
  awards: [string];
}

const Award = styled.div`
  padding: 0.1em;
`;

const EducationItem = (props: EducationItemProps) => (
  <div>
    <WorkEducationHeadline
      title={props.degree}
      location={props.institution}
      period={props.time}
    />

    {props.awards.map(award => <Award>🏆 {award}</Award>)}
  </div>
);

interface EducationListProps {
  educationList: [
    {
      node: EducationItemProps;
    }
  ];
}

const List = styled.div`
  & > div:not(:first-child) {
    border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  }
`;

const EducationList = (props: EducationListProps) => (
  <div>
    <h2>🎓 Education</h2>
    <List>{props.educationList.map(we => <EducationItem {...we.node} />)}</List>
  </div>
);

export default EducationList;
