import * as React from 'react';
import StackNavigation from '@navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@navigation/RootNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigation />
    </NavigationContainer>
  );
}
