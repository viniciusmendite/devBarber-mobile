import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, LogoutButton} from './styles';

import api from '../../services/api';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await api.logout();
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  return (
    <Container>
      <LogoutButton title="Sair" onPress={handleLogout} />
    </Container>
  );
};

export default Profile;
