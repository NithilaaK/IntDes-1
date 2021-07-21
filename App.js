import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component{
  render() {
    return (
      <AppContainer />
    )
  }
}
  
  const switchNavigator = createSwitchNavigator({
    IntroScreen: {screen: IntroScreen},
    LoginScreen: {screen: LoginScreen}
  });
  
  const AppContainer = createAppContainer(switchNavigator);
