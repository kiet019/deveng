import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export const SignInWelcomeLayout = ({
  children,
  paddingTop = 0,
}: {
  paddingTop?: number;
  children: ReactNode;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: paddingTop,
        minHeight: 850,
        backgroundColor: "#f4f5f9",
      }}
    >
      {children}
    </View>
  );
};
