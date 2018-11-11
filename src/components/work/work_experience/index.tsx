import * as React from "react";
import WorkTitle from "../work_title";
import { IWorkExperienceItemType } from "../../../pages/work";
import styled from "styled-components";
import StyledText from "../../text";

const Blurb = styled.blockquote`
  margin: 0em 0em 1em 0em;
  padding: 0 0.5em;
  color: hsla(0, 0%, 0%, 0.6);
  border-left: 0.39rem solid hsla(0, 0%, 0%, 0.13);
  font-size: 1em;
  p {
    margin-bottom: 0.5em;
  }

  li {
    margin-bottom: 0px;
  }
`;

const TagList = styled.div`
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;

const Tag = styled(StyledText)`
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
    <Blurb>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </Blurb>
    <TagList>
      {props.tags.map(tag => (
        <Tag key={tag} type="span">
          {tag}
        </Tag>
      ))}
    </TagList>
  </div>
);

export default WorkExperience;
