import * as React from "react";
import styled from "styled-components";
import StyledText from "../../common/StyledText";

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

const Avatar = (props: IAvatarProps) => (
  <AvatarContainer>
    <AvatarImage src={props.imageUrl} />
    <StyledText type="h1" fontWeight="bold">
      {props.name}
    </StyledText>
  </AvatarContainer>
);

export default Avatar;
