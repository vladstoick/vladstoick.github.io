import * as React from "react";
import { Row } from "../../layout/grid";
import styled from "styled-components";

type WorkEducationHeadlineProps = {
  title: string;
  location: string;
  period: string;
};

const HeadlineRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 5px;
  }
`;

const Position = styled.p`
  margin-bottom: 0.1em;
  font-size: 1.2em;
`;

const PositionTitle = styled.span`
  font-weight: bold;
`;

const Period = styled.span`
  color: gray;
`;

const WorkTitle = (props: WorkEducationHeadlineProps) => (
  <HeadlineRow>
    <Position>
      <PositionTitle>{props.title}</PositionTitle> at{" "}
      <span>{props.location}</span>
    </Position>
    <Period>{props.period}</Period>
  </HeadlineRow>
);

export default WorkTitle;