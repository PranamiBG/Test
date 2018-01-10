import React from 'react';
import { TabNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const MainTabs = TabNavigator({
  Home: {
    screen: SplashScreen
  },
  Next: {
      screen: SplashScreen
  }
})

export default MainTabs;
