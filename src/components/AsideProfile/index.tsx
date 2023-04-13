import React from "react";
import { AvatarCircle, Button, Container, Description, Name } from "./style";

interface Props {
  user: {
    initials: string;
    name: string;
    description: string;
  };
}

const AsideProfile: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <AvatarCircle>{user.initials}</AvatarCircle>
      <Name>{user.name}</Name>
      <Description>{user.description}</Description>
      <Button>Ver todos anúncios</Button>
    </Container>
  );
};

export default AsideProfile;
