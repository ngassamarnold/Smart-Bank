import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@screens/splash';
import Welcome from '@screens/welcome';

const settings = {
  initialRouteName: 'Splash',
  headerMode: 'none',
  screenOptions: {
    animationEnabled: true,
    //for desabled header bar
    headerShown: false,
  },
};

const nodes = [
  { name: 'Splash', screen: Splash },
  { name: 'Welcome', screen: Welcome },
];

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator {...settings}>
    {nodes.map((tab, i) => (
      <Stack.Screen key={i} name={tab.name} component={tab.screen} />
    ))}
  </Stack.Navigator>
);

export default StackNavigator;
