import * as React from "react";
import { Row, Column } from "./grid";
import styled from "styled-components";
import * as colours from "../utils/colours";

interface EducationItemProps {
  institution: string;
  time: string;
  degree: string;
  awards: [string];
}

const EducationHeadline = Row.extend`
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 5px;
  }
`;

const Education = styled.p`
  margin-bottom: 0.1em;
  font-size: 1.2em;
`;

const Degree = styled.span`
  font-weight: bold;
`;

const Award = styled.div`
  padding: 0.1em;
`;

const EducationPeriod = styled.span`
  color: gray;
`;

const EducationItem = (props: EducationItemProps) => (
  <div>
    <EducationHeadline>
      <Education>
        <Degree>{props.degree}</Degree> at <span>{props.institution}</span>
      </Education>
      <EducationPeriod>
        <span>{props.time}</span>
      </EducationPeriod>
    </EducationHeadline>
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
