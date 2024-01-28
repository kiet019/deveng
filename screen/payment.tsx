import { Image, Text, View } from "react-native";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";

const image = require("../assets/images/qr-code.png");

export default function PaymentScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            objectFit: "contain",
            width: 260,
          }}
          source={image}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 30
          }}
        >
          <Text
            style={{
              color: "#1F1F39",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              color: "#3D5CFF",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            $xx.xx
          </Text>
        </View>
      </View>
    </SignInWelcomeLayout>
  );
}
