import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { ContainedButton } from "../components/common/button";
import {
  RecomendCard,
  RecomendCardProps,
} from "../components/card/recommend-card";
import { GridBox } from "../components/common/grid";
import { ListeningCard, ReadingCard, SpeakingCard, WritingCard } from "../components/card/skill-card";

const imageSrc = require("../assets/images/recommend-image.png");
const recommendList: RecomendCardProps = {
  imageSrc,
  detail: "20 minutes of reading with Bill Gates",
  title: "Serenity",
};
export default function FeedbackScreen({navigation} : any) {
  return (
    <SignInWelcomeLayout paddingTop={100}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Feedback for today
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 20 }}>
          The basic of English.
        </Text>

        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}>Recommended</Text>
          <RecomendCard props={recommendList} />
        </View>
        <Text style={styles.title}>Tip of the day</Text>
        <Text style={{ color: "#585858", marginBottom: 20 }}>
          Grammar is really important and I’m not saying you should ignore it,
          but sometimes when people are learning English they want to memorize
          every rule and they get stuck in details that don’t make a big
          difference. Actually, not even the native speakers know all the rules.
          Just remember, the most important thing about fluency is being able to
          communicate. So practice speaking even if you haven’t memorized your
          whole grammar book.
        </Text>
        <Text style={styles.title}>Skills</Text>
        <GridBox spacing={20}>
          <ReadingCard />
          <WritingCard />
          <SpeakingCard />
          <ListeningCard />
        </GridBox>
      </ScrollView>
      <View
        style={{ flex: 0.15, justifyContent: "center", alignItems: "center" }}
      >
        <ContainedButton onPress={() => {
          navigation.push("Complementarity")
        }}>Next</ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "#585858",
    width: 350,
    paddingVertical: 5,
  },
});
