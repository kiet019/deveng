import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  CourseItem,
  InformationItem,
  HomeItem,
  InformationAppItem,
  MessageItem,
} from "./bottom-navigation-item";
import { Keyboard } from "react-native";
import { useEffect, useState } from "react";

const renderItem = (itemName: string, isActive: boolean) => {
  switch (itemName) {
    case "Home":
      return <HomeItem isActive={isActive} />;
    case "Account":
      return <InformationItem isActive={isActive} />;
    case "Course":
      return <CourseItem isActive={isActive} />;
    case "Message":
      return <MessageItem isActive={isActive} />;
  }
};

export const BottomNavigation = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              display: !keyboardStatus ? "flex" : "none",
              flex: 1,
            }}
          >
            <View
              style={{
                borderColor: isFocused ? "#3D5CFF" : "#e6e6e6",
                borderTopWidth: 1.5,
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                marginHorizontal: 20,
              }}
            >
              {renderItem(label.toString(), isFocused)}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
