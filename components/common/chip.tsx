import { ReactNode } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const TextChip = ({
  children,
  color = "#115E59",
  backgroundColor = "#99F6E4",
}: {
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={{
        paddingTop: 3,
        paddingBottom: 5,
        borderRadius: 40,
        paddingHorizontal: 14,
        backgroundColor,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color,
        }}
      >
        {children}
      </Text>
    </View>
  );
};
