import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

export const TitleCenterHeader = ({
  title,
  goBack,
}: {
  goBack: any;
  title: string;
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={goBack}>
        <Icon source={"arrow-left"} size={30} color="white" />
      </Pressable>
      <Text
        style={{
          width: 300,
          fontSize: 20,
          fontWeight: "600",
          textAlign: "center",
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    flex: 0.2,
    width: "120%",
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 10,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7f7cd6",
  },
});
