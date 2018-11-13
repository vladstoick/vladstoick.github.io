import * as React from "react";
import styled from "styled-components";
import { IWorkExperienceItemType } from "../../../pages/work";
import { renderAst } from "../../../utils/markdown";
import StyledText from "../../text";
import WorkTitle from "../work_title";

export const TagList = styled.div`
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;

export const Tag = styled(StyledText)`
  background-color: #e37b40;
  color: white;
  margin: 2px 5px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.7em;
`;

const WorkExperience = (props: IWorkExperienceItemType) => (
  <div key={props.id}>
    <WorkTitle
      title={props.title}
      location={props.companyName}
      period={props.time}
    />
    {renderAst(props.htmlAst)}
  </div>
);

export default WorkExperience;
