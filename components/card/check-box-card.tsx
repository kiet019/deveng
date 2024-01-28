import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

export const CheckBoxCard = ({
  onCheck,
  title,
}: {
  title: string;
  onCheck?: any;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (onCheck) {
      onCheck();
    }
  };
  return (
    <View
      style={{
        ...styles.card,
        borderColor: isChecked ? "#14B8A6" : "#e4e4e7",
      }}
    >
      <Text style={styles.text}>{title}</Text>
      <Checkbox
        color="#20b2aa"
        status={isChecked ? "checked" : "unchecked"}
        onPress={handleCheck}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 15,
    
  },
  text: {
    fontWeight: "bold",
  },
});
