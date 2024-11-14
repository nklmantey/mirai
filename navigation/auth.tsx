import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/auth/login';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
    </Stack.Navigator>
  );
}