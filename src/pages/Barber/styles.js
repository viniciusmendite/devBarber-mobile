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

export const FakeSwiper = styled.View`
  height: 240px;
  background-color: #63c2d1;
`;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 300px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #fff;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

export const UserFavoriteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #fff;
  elevation: 4;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 16px;
`;

export const ServiceArea = styled.View``;

export const ServiceTitle = styled.Text``;

export const ServiceItem = styled.View``;

export const ServiceInfo = styled.View``;

export const ServiceName = styled.Text``;

export const ServicePrice = styled.Text``;

export const ServiceChooseButton = styled.TouchableOpacity``;

export const ServiceChooseButtonText = styled.Text``;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 5px;
  z-index: 15;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
