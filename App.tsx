import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashWelcomeScreen from "./screen/splash-welcome";
import LoginScreen from "./screen/login";
import WelcomeScreen from "./screen/welcome";
import SignUpEmail from "./screen/sign-up/email";
import SignUpVerify from "./screen/sign-up/verify";
import SignUpPassword from "./screen/sign-up/password";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignUp-Password"
          component={SignUpPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Email"
          component={SignUpEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Verify"
          component={SignUpVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashWelcome"
          component={SplashWelcomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
