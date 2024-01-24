import { StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";
import { View } from "react-native/Libraries/Components/View/View";

const PRIMARY_COLOR = "#3D5CFF";
export const HomeItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Icon
        size={40}
        source={"home"}
        color={isActive ? PRIMARY_COLOR : "white"}
      />
      <Text
        style={{
          ...styles.text,
          color: isActive ? PRIMARY_COLOR : "#B8B8D2",
        }}
      >
        Home
      </Text>
    </>
  );
};
export const MessageItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Icon
        size={40}
        source={"message-processing"}
        color={isActive ? PRIMARY_COLOR : "white"}
      />
      <Text
        style={{
          ...styles.text,
          color: isActive ? PRIMARY_COLOR : "#B8B8D2",
        }}
      >
        Message
      </Text>
    </>
  );
};
export const InformationItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Icon
        size={40}
        source={"account"}
        color={isActive ? PRIMARY_COLOR : "white"}
      />
      <Text
        style={{
          ...styles.text,
          color: isActive ? PRIMARY_COLOR : "#B8B8D2",
        }}
      >
        Account
      </Text>
    </>
  );
};
export const CourseItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Icon
        size={40}
        source={"card-text"}
        color={isActive ? PRIMARY_COLOR : "white"}
      />
      <Text
        style={{
          ...styles.text,
          color: isActive ? PRIMARY_COLOR : "#B8B8D2",
        }}
      >
        Course
      </Text>
    </>
  );
};
export const InformationAppItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Icon
        size={40}
        source={"mail"}
        color={isActive ? PRIMARY_COLOR : "white"}
      />
      <Text
        style={{
          ...styles.text,
          color: isActive ? PRIMARY_COLOR : "#B8B8D2",
        }}
      >
        Thông tin
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "700",
  },
});
