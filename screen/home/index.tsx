import React from "react";
import HomeScreen from "./home";
import { TitleHeader } from "../../components/header/title-header";
import BookingScreen from "../booking";
import BookingDetailScreen from "../booking-detail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "../../components/navigation/bottom-navigation";
import CourseParticipantScreen from "./course-participant";
import MessageScreen from "./message";

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
        name="Message"
        component={MessageScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Course"
        component={CourseParticipantScreen}
        options={{
          headerTitle: () => <TitleHeader title="Course Participant" />,
        }}
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
