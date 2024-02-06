import { ScrollView, StyleSheet, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { ContainedButton } from "../components/common/button";
import { Card } from "../components/common/card";
import { Icon, Text } from "react-native-paper";
import { TitleCenterHeader } from "../components/header/title-center-header";

const data = [
  "Nguyễn Văn A",
  "175 Nguyễn Gia Trí..",
  "29/01/2002",
  "fpt12*****.@gmail.com",
  "0981827383",
  "Change password",
];
export default function ChangeInformationScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout paddingTop={130} paddingHorizontal={0}>
      <TitleCenterHeader
        goBack={() => navigation.goBack()}
        title="Account"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
      >
        {data.map((value, index) => (
          <View
            key={index}
            style={{
              marginVertical: 10,
              ...styles.flexBetween,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 15,
              backgroundColor: "white",
            }}
          >
            <View style={styles.flexBox}>
              <Text style={{ fontWeight: "bold", color: "#ACACAC" }}>
                {value}
              </Text>
            </View>
            <View style={styles.flexBox}>
              <Text style={{ fontWeight: "bold", color: "#ACACAC" }}>
                Change
              </Text>
              <Icon size={20} color="#ACACAC" source={"chevron-right"} />
            </View>
          </View>
        ))}

        <View style={{ ...styles.inputContainer, marginVertical: 20 }}>
          <ContainedButton
            onPress={() => {
              navigation.navigate("HomeNavigation");
            }}
          >
            Save
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
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
