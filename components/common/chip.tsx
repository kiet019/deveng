import { ReactNode } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const TextChip = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        paddingTop: 3,
        paddingBottom: 5,
        borderRadius: 40,
        paddingHorizontal: 14,
        backgroundColor: "#99F6E4",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#115E59",
        }}
      >
        {children}
      </Text>
    </View>
  );
};
