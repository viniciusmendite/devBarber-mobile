import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Container} from './styles';

import api from '../../services/api';

const Barber = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
      } else {
        alert('Erro: ' + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, []);

  return <Container />;
};

export default Barber;
