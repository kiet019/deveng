import { Image, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
const image = require("../assets/images/success.png");
export default function FeedbackSuccessScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout backgroundColor="white">
      <View
        style={{
          justifyContent: "flex-end",
          flex: 4,
        }}
      >
        <Image
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          source={image}
        />
      </View>
      <View style={{ flex: 1.5 }}>
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            paddingHorizontal: 70,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Feedback susccesfully
        </Text>
      </View>
      <View style={{ flex: 4, alignItems: "center" }}>
        <ContainedButton
          onPress={() => {
            navigation.navigate("HomeNavigation", { screen: "Home" });
          }}
        >
          Go to Home Page
        </ContainedButton>
      </View>
    </SignInWelcomeLayout>
  );
}
