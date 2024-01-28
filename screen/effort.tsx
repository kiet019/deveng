import { View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";

import { useState } from "react";
import { CheckBoxCard } from "../components/card/check-box-card";

const checkList = [
  "Daily",
  "Once or twice a week",
  "Three or four times a week",
  "Every other week",
  "Monthly",
  "Rarely",
];
export default function EffortScreen({ navigation }: any) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
  };
  return (
    <SignInWelcomeLayout paddingTop={100} paddingHorizontal={30}>
      <View style={{ flex: 3 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Effort</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginVertical: 12,
            marginBottom: 20,
          }}
        >
          For your weak skills and you want to improve them along the way, how
          dense is enough?
        </Text>
        {checkList.map((title, index) => (
          <View style={{ marginBottom: 10 }} key={index}>
            <CheckBoxCard title={title} onCheck={handleClick} />
          </View>
        ))}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ContainedButton
          disabled={!isSelected}
          onPress={() => {
            navigation.push("FeedbackRating");
          }}
        >
          Next
        </ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
}
