import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { BasketCard, BasketCardProps } from "../../components/card/basket-card";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";

const courseImage = require("../../assets/images/course-1.png");
export default function CourseParticipantScreen({ navigation }: any) {
  const data: BasketCardProps[] = [
    {
      imageSrc: courseImage,
      price: "",
      teacher: "Webb Kyle",
      title: "Product Design",
    },
  ];
  const renderItem = ({ item }: { item: BasketCardProps }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.push("CourseDetail");
        }}
      >
        <BasketCard props={item} />
      </Pressable>
    );
  };

  return (
    <SignInWelcomeLayout>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
