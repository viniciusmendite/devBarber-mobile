import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainTab from './MainTab';

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
  <Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="Preload" component={Preload} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
    <Screen name="MainTab" component={MainTab} />
  </Navigator>
);

export default MainStack;
