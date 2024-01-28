import { Pressable, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
import {
  ReadingCard,
  WritingCard,
  SpeakingCard,
  ListeningCard,
} from "../components/card/skill-card";
import { GridBox } from "../components/common/grid";
import { useState } from "react";

export default function ComplementarityScreen({ navigation }: any) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
  };
  return (
    <SignInWelcomeLayout paddingTop={100} paddingHorizontal={30}>
      <View style={{ flex: 3 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Complementarity
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginVertical: 12,
            marginBottom: 20,
          }}
        >
          You see which of your skills improved today.
        </Text>
        <GridBox spacing={20}>
          <ReadingCard onPress={handleClick} />
          <WritingCard onPress={handleClick} />
          <SpeakingCard onPress={handleClick} />
          <ListeningCard onPress={handleClick} />
        </GridBox>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ContainedButton
          disabled={!isSelected}
          onPress={() => {
            navigation.push("Effort");
          }}
        >
          Next
        </ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
}
