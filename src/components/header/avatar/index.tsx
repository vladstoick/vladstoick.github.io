import * as React from "react";
import styled from "styled-components";

interface IAvatarProps {
  imageUrl: string;
  name: string;
}

const AvatarContainer = styled.div`
  margin: 0 auto;
`;

const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto;
  border-radius: 75px;
`;

const AvatarTitle = styled.h1`
  font-weight: bold;
`;

const Avatar = (props: IAvatarProps) => (
  <AvatarContainer>
    <AvatarImage src={props.imageUrl} />
    <AvatarTitle>{props.name}</AvatarTitle>
  </AvatarContainer>
);

export default Avatar;
