import { View, ViewProps } from "react-native";

export const Card = ({ children, ...props }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 20,
        ...props.style,
      }}
    >
      <View style={{ width: 300 }}>{children}</View>
    </View>
  );
};

export const BorderCard = ({ children, ...props }: any) => {
  return (
    <View
      style={{
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "#DFDFDF",
        backgroundColor: "white",
        padding: 10,
        ...props.style,
      }}
    >
      {children}
    </View>
  );
};
