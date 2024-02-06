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
import BookingDetailScreen from "./screen/booking-detail";
import BookingScreen from "./screen/booking";
import PaymentScreen from "./screen/payment";
import SuccessScreen from "./screen/success";
import FeedbackSuccessScreen from "./screen/feedback-success";
import FeedbackScreen from "./screen/feedback";
import ComplementarityScreen from "./screen/complementarity";
import EffortScreen from "./screen/effort";
import FeedbackRatingScreen from "./screen/feeback-rating";
import MessageDetailScreen from "./screen/message-detail";
import { MessageHeader } from "./components/header/props-header";
import CourseDetailScreen from "./screen/course-detail";
import TimetableScreen from "./screen/timetable";
import { TitleCenterHeader } from "./components/header/title-center-header";
import SignInScreen from "./screen/sign-in";
import { PaperProvider } from "react-native-paper";
import ChangeInformationScreen from "./screen/change-information";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChangeInformation"
            component={ChangeInformationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Feedback"
            component={FeedbackScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />
          <Stack.Screen
            name="MessageDetail"
            component={MessageDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Your basket" /> }}
          />
          <Stack.Screen
            name="Timetable"
            component={TimetableScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseDetail"
            component={CourseDetailScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Your basket" /> }}
          />
          <Stack.Screen
            name="FeedbackRating"
            component={FeedbackRatingScreen}
            options={{ headerTitle: () => <TitleHeader title="" /> }}
          />
          <Stack.Screen
            name="Effort"
            component={EffortScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />
          <Stack.Screen
            name="Complementarity"
            component={ComplementarityScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />
          <Stack.Screen
            name="FeedbackSuccess"
            component={FeedbackSuccessScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            // options={{ headerShown: false }}
            options={{ headerTitle: () => <TitleHeader title="Payment" /> }}
          />

          <Stack.Screen
            name="BookingDetail"
            component={BookingDetailScreen}
            options={{
              headerTitle: () => <TitleHeader title="Booking Detail" />,
            }}
          />
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{ headerTitle: () => <TitleHeader title="Booking" /> }}
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
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SplashWelcome"
            component={SplashWelcomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
