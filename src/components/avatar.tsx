import * as React from "react";
import styled from "styled-components";
import { Column } from "./grid";

const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 75px;
`;

const AvatarTitle = styled.h1`
  margin-top: 5px;
  font-weight: 500;
`;

const CentredColumn = Column.extend`
  margin: 0 auto;
`;

interface AvatarProps {
  imageUrl: string;
  name: string;
}

const Avatar = (props: AvatarProps) => (
  <CentredColumn>
    <AvatarImage src={props.imageUrl} />
    <AvatarTitle>{props.name}</AvatarTitle>
  </CentredColumn>
);

export default Avatar;
