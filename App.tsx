import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashWelcomeScreen from "./screen/splash-welcome";
import LoginScreen from "./screen/login";
import WelcomeScreen from "./screen/welcome";
import SignUpEmail from "./screen/sign-up/email";
import SignUpVerify from "./screen/sign-up/verify";
import SignUpPassword from "./screen/sign-up/password";
import ContactScreen from "./screen/contact";
import BasketScreen from "./screen/basket";
import { TitleHeader } from "./components/header/title-header";
import HomeNavigation from "./screen/home";
import { View } from "react-native";
import BookingDetailScreen from "./screen/home/booking-detail";
import StudentBookingScreen from "./screen/home/studentBooking";
import TeacherBookingScreen from "./screen/home/TeacherBooking";
import ParticipantBookingScreen from "./screen/home/participantBooking";
import StudentBookingDetailScreen from "./screen/home/studentBookingDetail";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashWelcome"
          component={SplashWelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Email"
          component={SignUpEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Password"
          component={SignUpPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp-Verify"
          component={SignUpVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{ headerShown: false }}
          // options={{ headerTitle: () => <TitleHeader title="Your basket" /> }}
        />
        <Stack.Screen
          name="Student-Booking"
          component={StudentBookingScreen}
          options={{ headerTitle: () => <TitleHeader title="Student Booking" /> }}
        />
        <Stack.Screen
          name="Teacher-Booking"
          component={TeacherBookingScreen}
          options={{ headerTitle: () => <TitleHeader title="Teacher Booking" /> }}
        />
        <Stack.Screen
          name="Participant-Booking"
          component={ParticipantBookingScreen}
          options={{ headerTitle: () => <TitleHeader title="Participant Booking" /> }}
        />
        <Stack.Screen
          name="BookingDetail"
          component={BookingDetailScreen}
          options={{
            headerTitle: () => <TitleHeader title="Booking Detail" />,
          }}
        />
        <Stack.Screen
          name="Student-Booking-Detail-Screen"
          component={StudentBookingDetailScreen}
          options={{
            headerTitle: () => <TitleHeader title="Booking Detail" />,
          }}
        />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{
            headerTitle: () => <TitleHeader title="Your basket" />,
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ headerTitle: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
