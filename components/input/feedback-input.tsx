import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native";
import { Spacing } from "../common/spacing";

export interface FeedBackInputProps {
  title: string;
  placeholder: string;
  onChange?: any;
}
export const FeedBackInput = ({
  title,
  placeholder,
  onChange,
}: FeedBackInputProps) => {
  const [input, setInput] = useState("");
  const handleChangeText = (newText: string) => {
    setInput(newText);
    if (onChange) {
      onChange(newText);
    }
  };
  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
          color: "#2071B2",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          ...styles.card,
          borderColor: input !== "" ? "#105955" : "#888888",
        }}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#888888"}
          onChangeText={handleChangeText}
          style={{
            width: "auto",
            fontSize: 12,
            color: "#105955",
            fontWeight: "bold",
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 5,
    borderWidth: 1.5,
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 10,
    elevation: 3,
  },
  text: {
    fontWeight: "bold",
  },
});

{
}
