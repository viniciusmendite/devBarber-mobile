import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwiperPhoto = styled(Swiper).attrs({
  paginationStyle: {
    top: 15,
    right: 15,
    bottom: null,
    left: null,
  },
})`
  height: 240px;
`;

export const SwiperDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({active}) => (active ? '#63c2d1' : '#fff')};
  margin: 3px;
`;

export const SwiperItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwiperImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View``;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 300px;
`;

export const UserInfoArea = styled.View``;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;
