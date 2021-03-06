import React, {useState, useEffect} from 'react';
import {StatusBar, Platform, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import GeoLocation from '@react-native-community/geolocation';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
} from './styles';

import api from '../../services/api';
import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

const Home = () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      GeoLocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getBarbers();
      });
    }
  };

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;

    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let response = await api.getBarbers(lat, lng, locationText);
    if (response.error === '') {
      if (response.loc) {
        setLocationText(response.loc);
      }
      setList(response.data);
    } else {
      alert('Erro:' + response.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBarbers();
  }, []);

  const handleOnRefreshing = () => {
    setRefreshing(false);
    getBarbers();
  };

  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  };

  return (
    <Container>
      <StatusBar backgroundColor="#63c2d1" barStyle="light-content" />
      <Scroller
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleOnRefreshing}
          />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFF"
            value={locationText}
            onChangeText={(text) => setLocationText(text)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF" />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#fff" />}

        <ListArea>
          {list.map((item, index) => (
            <BarberItem key={index} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};

export default Home;
