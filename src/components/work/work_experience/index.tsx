import * as React from "react";
import styled from "styled-components";
import { IWorkExperienceMarkdown } from "../../../pages/work";
import { renderAst } from "../../../utils/markdown";
import StyledText from "../../common/StyledText";

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

const WorkExperience = (props: IWorkExperienceMarkdown) => (
  <div>{renderAst(props.htmlAst)}</div>
);

export default WorkExperience;
