import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import TopUp from './TopUp';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TopUp" component={TopUp} />{' '}
    </Stack.Navigator>
  );
};

export default AppNavigator;
