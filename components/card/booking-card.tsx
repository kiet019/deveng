import { Image, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../layout/signin-welcome";
import { Text } from "react-native-paper";
import { ContainedButton } from "../common/button";

export interface BookingCardProps {
  imageTeacherSrc: any;
  name: string;
  age: number;
  level: string;
  teacherPrice: string;
  communicationDetail: string;
  aboutThisCourseDetail: string;
}
export const BookingCard = ({ props }: { props: BookingCardProps }) => {
  return (
    <SignInWelcomeLayout>
      <View style={styles.userContainer}>
        <Image
          source={props.imageTeacherSrc}
          style={{
            marginRight: 40,
          }}
        />
        <View>
          <Text
            style={styles.userText}
          >{props.name}</Text>
          <Text
            style={{
              marginVertical: 25,
              ...styles.userText,
            }}
          >
            {props.age}
          </Text>
          <Text style={styles.userText}>{props.level}</Text>
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
            {props.teacherPrice}
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
          {props.communicationDetail}
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
          {props.aboutThisCourseDetail}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ContainedButton>Booking</ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
};

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
