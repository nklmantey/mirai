import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/auth/login';
import SignupScreen from '@/screens/auth/signup';
import WelcomeScreen from '@/screens/auth/welcome';

const Stack = createNativeStackNavigator<AuthStackParamsList>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='welcome' component={WelcomeScreen} />
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}