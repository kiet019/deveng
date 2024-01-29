import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

export const MessageHeader = ({
  title,
  imageSrc,
  goBack,
}: {
  goBack: any;
  title: string;
  imageSrc: any;
}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={goBack}>
        <Icon source={"arrow-left"} size={30} color="#4F5E7B" />
      </Pressable>
      <Image
        source={imageSrc}
        style={{
          marginHorizontal: 15,
          width: 50,
          height: 50,
          borderRadius: 50,
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginLeft: 15,
          color: "#1B1A57",
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
    paddingBottom: 10,
    paddingLeft: 10,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
});
