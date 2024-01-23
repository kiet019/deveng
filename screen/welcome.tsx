import { Image, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { Button, Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";

const logo = require("../assets/images/logo.png");

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View style={{ flex: 0.9 }}>
        <View style={styles.imageContainer}>
          <Image source={logo} />
        </View>
        <View style={styles.detailContainer}>
          <Text
            style={{
              textAlign: "center",
              color: "#364356",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Let's find the "A" with us
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              color: "#364356",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Please Sign in to view personalized recommendations
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <ContainedButton>Sign up</ContainedButton>
          <Text
            style={{
              marginTop: 40,
              fontSize: 18,
              color: "#5667FD",
              fontWeight: "400",
            }}
            onPress={() => {
              navigation.navigate("Login")
            }}
          >
            Skip
          </Text>
        </View>
      </View>
    </SignInWelcomeLayout>
  );
}
{
  /* <View style={{ flex: 0.9 }}></View> */
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
});
