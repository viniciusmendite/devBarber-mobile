import React from 'react';

import {
  Container,
  Avatar,
  InfoArea,
  UserName,
  SeeProfileButton,
  SeeProfileButtonText,
} from './styles';

import Stars from '../Stars';

const BarberItem = ({data}) => {
  return (
    <Container>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />
        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Container>
  );
};

export default BarberItem;
