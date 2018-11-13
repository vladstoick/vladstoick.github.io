import * as React from "react";
import styled from "styled-components";
import { IWorkExperienceItemType } from "../../../pages/work";
import StyledText from "../../common/StyledText";
import WorkExperience from "../work_experience";

const List = styled.div`
  & > div:not(:first-child) {
    border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  }
`;

interface IWorkExperienceProps {
  workExperience: IWorkExperienceItemType[];
}

const WorkExperienceList = (props: IWorkExperienceProps) => (
  <div>
    <StyledText type="h2">💼 Work Experience</StyledText>
    <List>
      {props.workExperience.map(we => (
        <WorkExperience {...we} key={we.id} />
      ))}
    </List>
  </div>
);

export default WorkExperienceList;
