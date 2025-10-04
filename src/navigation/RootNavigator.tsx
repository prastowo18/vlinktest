import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import { useAuthStore } from '../store/useAuthStore';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn, checkTokenValid } = useAuthStore();

  useEffect(() => {
    checkTokenValid();
  }, [checkTokenValid]);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
