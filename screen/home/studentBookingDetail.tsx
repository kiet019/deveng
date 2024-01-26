import { Image, StyleSheet, View, Pressable, FlatList } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { Text } from "react-native-paper";
import { BookingCard } from "../../components/card/booking-card";
import { ContainedButton } from "../../components/common/button";
import { BookingCardProps } from "../../components/card/booking-card";

const teacher = require("../../assets/images/teacher1.png");
const avatar = require("../../assets/images/avatar.png");
export default function StudentBookingDetailScreen({ navigation }: any) {
  const data: BookingCardProps[] = [
    {
      imageTeacherSrc: teacher,
      name: "Giáo Làng",
      age: 20,
      level: "Trình độ: Master",
      teacherPrice: "$200",
      communicationDetail: "6h 14min · 24 Lessons",
      aboutThisCourseDetail:
        "Trên thông IT - Dưới tường Showbiz | Happy Code | Lửa trong tim",
    },
  ];
  const renderItem = ({ item }: { item: BookingCardProps }) => {
    return (
    <BookingCard props={item} />
    );
  };
    return (
      <SignInWelcomeLayout>
        <View style={styles.userContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
          />
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
