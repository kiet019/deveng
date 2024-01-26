import React from "react";
import HomeScreen from "./home";
import { TitleHeader } from "../../components/header/title-header";
import BookingScreen from "./studentBooking";
import BookingDetailScreen from "./booking-detail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "../../components/navigation/bottom-navigation";

const Tab = createBottomTabNavigator();
export default function HomeNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Course"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// tabBar={(props) => <BottomNavigation {...props} />}
