import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export const SignInWelcomeLayout = ({
  children,
  paddingTop = 0,
  backgroundColor = "#f4f5f9",
  isBottomTab = false,
  paddingHorizontal = 10,
  minHeight = 700,
}: {
  paddingHorizontal?: number;
  paddingTop?: number;
  children: ReactNode;
  isBottomTab?: boolean;
  minHeight?: number;

  backgroundColor?: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop,
        paddingHorizontal,
        backgroundColor,
        minHeight,
        paddingBottom: isBottomTab ? 89 : 0,
      }}
    >
      {children}
    </View>
  );
};
// %', background: 'linear-gradient(127deg, #470800 0%, #7E0F00 100%)
