import { Image, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";

const avatar = require("../assets/images/avatar.png");
export default function BookingDetailScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View style={styles.userContainer}>
        <Image
          style={{
            marginRight: 40,
          }}
          source={avatar}
        />
        <View>
          <Text style={styles.userText}>Nguyễn Văn A</Text>
          <Text
            style={{
              marginVertical: 25,
              ...styles.userText,
            }}
          >
            Age: xx
          </Text>
          <Text style={styles.userText}>Trình độ: xx</Text>
        </View>
      </View>
      <View style={styles.courseContainer}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#1F1F39",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Communication
          </Text>
          <Text
            style={{
              color: "#3D5CFF",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            $xx.xx
          </Text>
        </View>
        <Text
          style={{
            // 6h 14min · 24 Lessons
            color: "#858597",
            fontSize: 14,
            paddingVertical: 15,
            fontWeight: "400",
          }}
        >
          6h 14min · 24 Lessons
        </Text>
        <Text
          style={{
            color: "#1F1F39",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          About this course
        </Text>
        <Text
          style={{
            // 6h 14min · 24 Lessons
            color: "#858597",
            fontSize: 14,
            paddingVertical: 15,
            fontWeight: "400",
          }}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ContainedButton onPress={() => {
          navigation.push("Payment")
        }}>Booking</ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userText: {
    color: "#1F1F39",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  courseContainer: {
    flex: 1,
  },
});
