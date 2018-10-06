import * as React from "react";
import styled from "styled-components";
import { Column } from "../grid";

const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto;
  border-radius: 75px;
`;

const AvatarTitle = styled.h1`
  font-weight: bold;
`;

const CentredColumn = styled(Column)`
  margin: 0 auto;
`;

interface IAvatarProps {
  imageUrl: string;
  name: string;
}

const Avatar = (props: IAvatarProps) => (
  <CentredColumn>
    <AvatarImage src={props.imageUrl} />
    <AvatarTitle>{props.name}</AvatarTitle>
  </CentredColumn>
);

export default Avatar;
