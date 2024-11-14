import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/screens/app/home';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  );
}