import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../views/SplashScreen';
import OnboardingView from '../views/OnboardingView';
import UsersView from '../views/UsersView';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FAF7F2' },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Users"
        component={UsersView}
        options={{ title: 'Node + Express + React Native', headerShown: true }}
      />
    </Stack.Navigator>
  );
}
