import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  Scroller,
  SwiperPhoto,
  SwiperDot,
  SwiperItem,
  SwiperImage,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavoriteButton,
  ServicesTitle,
  ServiceArea,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseButtonText,
  TestimonialArea,
  SwiperTestimonial,
  TestimonialItem,
  TestimonialInfo,
  TestimonialName,
  TestimonialBody,
  BackButton,
  LoadingIcon,
} from './styles';

import api from '../../services/api';

import Stars from '../../components/Stars';

import FavoriteFullIcon from '../../assets/favorite_full.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

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
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await api.getBarber(userInfo.id);
      if (json.error === '') {
        setUserInfo(json.data);
        setFavorited(json.data.favorited);
      } else {
        alert('Erro: ' + json.error);
      }
      setLoading(false);
    };
    getBarberInfo();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleFavoriteBarber = () => {
    setFavorited(!favorited);
    api.setFavorite(userInfo.id);
  };

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={true}
      />
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <SwiperPhoto
            dot={<SwiperDot active={false} />}
            activeDot={<SwiperDot active={true} />}
            autoplay={true}>
            {userInfo.photos.map((item, index) => (
              <SwiperItem key={index}>
                <SwiperImage source={{uri: item.url}} resiveMode="cover" />
              </SwiperItem>
            ))}
          </SwiperPhoto>
        ) : (
          <FakeSwiper />
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>

            <UserFavoriteButton onPress={handleFavoriteBarber}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#f00" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#f00" />
              )}
            </UserFavoriteButton>
          </UserInfoArea>

          {loading && <LoadingIcon size="large" color="#000" />}

          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>Lista de Serviços</ServicesTitle>
              {userInfo.services.map((item, index) => (
                <ServiceItem key={index}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>
                    <ServicePrice>R$ {item.price}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton>
                    <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}

          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <SwiperTestimonial
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon width="35" height="35" fill="#000" />}
                nextButton={<NavNextIcon width="35" height="35" fill="#000" />}>
                {userInfo.testimonials.map((item, index) => (
                  <TestimonialItem key={index}>
                    <TestimonialInfo>
                      <TestimonialName>{item.name}</TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialInfo>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TestimonialItem>
                ))}
              </SwiperTestimonial>
            </TestimonialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleGoBack}>
        <BackIcon width="40" height="40" fill="#fff" />
      </BackButton>
    </Container>
  );
};

export default Barber;
