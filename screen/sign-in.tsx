import { Image, ScrollView, StyleSheet, View } from "react-native";
import { StyledInput, TitleInput } from "../components/common/input";
import { useState } from "react";
import { Spacing } from "../components/common/spacing";
import { RadioButton, Text } from "react-native-paper";
import { ContainedButton } from "../components/common/button";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { GridBox } from "../components/common/grid";
import { RadioGender, RadioRole } from "../components/common/radio";
import { SelectCountry, SelectDistrict } from "../components/common/select";
const loginLogo = require("../assets/images/login-logo.png");
export default function SignInScreen({ navigation }: any) {
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("first");
  const [role, setRole] = useState("first");
  return (
    <SignInWelcomeLayout>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={loginLogo} />
        </View>
        <View style={styles.inputContainer}>
          <GridBox spacing={15}>
            <StyledInput onChangeText={setInput} placeholder="First name" />
            <StyledInput onChangeText={setInput} placeholder="Last name" />
          </GridBox>
          <StyledInput
            onChangeText={setInput}
            placeholder="Email address*"
            width={"100%"}
          />
          <StyledInput
            marginTop={20}
            onChangeText={setInput}
            placeholder="What is your birthday?"
            width={"100%"}
          />
          <RadioGender setRadioValue={setGender} />
          <RadioRole setRadioValue={setRole} />
          <GridBox spacing={15}>
            <SelectCountry />
            <SelectDistrict />
          </GridBox>
          <StyledInput
            onChangeText={setInput}
            placeholder="What is your address?"
            width={"100%"}
          />
          <StyledInput
            marginTop={20}
            onChangeText={setInput}
            placeholder="Phone number*"
            width={"100%"}
          />
        </View>
        <View style={{ ...styles.inputContainer, marginVertical: 20 }}>
          <ContainedButton
            onPress={() => {
              navigation.navigate("HomeNavigation");
            }}
          >
            Sign in
          </ContainedButton>
        </View>
      </ScrollView>
    </SignInWelcomeLayout>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 100,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
