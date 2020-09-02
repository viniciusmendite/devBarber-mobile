import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../pages/Preload';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
  <Navigator>
    <Screen name="Preload" component={Preload} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
  </Navigator>
);

export default MainStack;
