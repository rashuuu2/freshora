import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../views/SplashScreen';
import OnboardingView from '../views/OnboardingView';
import OnboardingPage3View from '../views/OnboardingPage3View';
import OnboardingPage4View from '../views/OnboardingPage4View';
import OnboardingPage5View from '../views/OnboardingPage5View';
import UsersView from '../views/UsersView';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
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
        name="Onboarding3"
        component={OnboardingPage3View}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding4"
        component={OnboardingPage4View}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding5"
        component={OnboardingPage5View}
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
