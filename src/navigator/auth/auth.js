import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../../modules/Auth/SignIn';

export default function Auth() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}
