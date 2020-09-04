import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Appointments from '../pages/Appointments';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

const {Navigator, Screen} = createBottomTabNavigator();

const MainTab = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="Search" component={Search} />
    <Screen name="Appointments" component={Appointments} />
    <Screen name="Favorites" component={Favorites} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export default MainTab;
