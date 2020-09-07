import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  const handleNavigateToBarberProfile = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  };

  return (
    <Container>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />
        <SeeProfileButton onPress={handleNavigateToBarberProfile}>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Container>
  );
};

export default BarberItem;
