import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigation from './app';
import AuthNavigation from './auth';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const isAuthenticated = false

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name='app' component={AppNavigation} />
        ) : (
          <Stack.Screen name='auth' component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}