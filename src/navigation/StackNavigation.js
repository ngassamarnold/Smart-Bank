import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@screens/splash';

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
  { name: 'Splash', screen: Splash},
  { name: 'Splash1', screen: Splash},
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
