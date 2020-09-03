import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Container, LoadingIcon} from './styles';

import BarberLogo from '../../assets/barber.svg';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);
  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1" barStyle="light-content" />
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};

export default Preload;
