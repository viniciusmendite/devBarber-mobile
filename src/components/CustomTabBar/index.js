import React from 'react';

import {Container, TabItem, TabItemCenter} from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

const CustomTabBar = ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Container>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon width="32" height="32" fill="#4eadbe" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFF"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon
          style={{opacity: state.index === 4 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFF"
        />
      </TabItem>
    </Container>
  );
};

export default CustomTabBar;
