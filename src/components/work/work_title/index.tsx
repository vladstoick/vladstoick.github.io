import * as React from "react";
import styled from "styled-components";
import { Row } from "../../layout/grid";
import StyledText from "../../text";

interface IWorkEducationHeadlineProps {
  title: string;
  location: string;
  period: string;
}

const HeadlineRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 5px;
  }
`;

const WorkTitle = (props: IWorkEducationHeadlineProps) => (
  <HeadlineRow>
    <StyledText type="p">
      <StyledText type="span" fontWeight="bold">
        {props.title}
      </StyledText>{" "}
      at <StyledText type="span">{props.location}</StyledText>
    </StyledText>
    <StyledText type="span" color="gray">
      {props.period}
    </StyledText>
  </HeadlineRow>
);

export default WorkTitle;
