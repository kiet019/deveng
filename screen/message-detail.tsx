import { Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { MessageHeader } from "../components/header/props-header";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { IconStatusUser } from "../components/card/message-card";
const user1 = require("../assets/images/user-1.png");
const user2 = require("../assets/images/user-2.png");

export default function MessageDetailScreen({ route, navigation }: any) {
  // const { imageSrc, title } = route.params;
  const data = {
    alreadyRead: false,
    imageSrc: user1,
    message: "Yes, that’s gonna work, hopefully. ",
    name: "Lee Williamson",
    status: "active",
    time: "06.12",
    totalUnread: 0,
  };
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <SignInWelcomeLayout
      backgroundColor="#f5f5f5"
      minHeight={keyboardStatus ? 0 : 700}
      paddingTop={120}
      paddingHorizontal={0}
    >
      <MessageHeader
        goBack={() => {
          navigation.goBack();
        }}
        imageSrc={data.imageSrc}
        title={data.name}
      />
      <AdminCard />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        showsVerticalScrollIndicator={false}
        style={{
          position: "relative",
          flex: 1,
          paddingLeft: 5,
          marginBottom: 5,
        }}
      >
        <UserMessage position="left" />
        <UserMessage position="right" />
        <UserMessage position="left" />
        <UserMessage position="right" />
        <UserMessage position="left" />
        <UserMessage position="right" />
      </ScrollView>
      <TextInput
        placeholderTextColor={"#8d8cab"}
        placeholder="Write a message"
        style={{
          paddingHorizontal: 20,
          width: "100%",
          color: "#8d8cab",
          backgroundColor: "white",
          height: 50,
        }}
      />
    </SignInWelcomeLayout>
  );
}
interface UserMessageProps {
  position: "left" | "right";
}
const UserMessage = ({ position }: UserMessageProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        width: "100%",
        marginVertical: 5,
        justifyContent: position === "left" ? "flex-start" : "flex-end",
      }}
    >
      {position === "left" ? (
        <>
          <IconStatusUser imageSrc={user1} status="active" marginRight={5} />
          <View
            style={{
              padding: 10,
              backgroundColor: "#2f80ed",
              borderRadius: 15,
              maxWidth: 250,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              That’s very nice place! you guys made a very good decision. Can’t
              wait to go on vacation!
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "right",
              }}
            >
              16.04
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              padding: 10,
              backgroundColor: "#2f80ed",
              borderRadius: 15,
              maxWidth: 250,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              That’s very nice place! you guys made a very good decision. Can’t
              wait to go on vacation!
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "right",
              }}
            >
              16.04
            </Text>
          </View>
          <IconStatusUser imageSrc={user1} status="active" marginRight={5} />
        </>
      )}
    </View>
  );
};

const AdminCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#f7f7f7",
        borderRadius: 5,
        padding: 10,
        position: "absolute",
        zIndex: 1,
        top: 140,
        right: 20,
        width: 290,
      }}
    >
      <Text
        style={{
          color: "#A1A1BC",
          marginBottom: 5,
          position: "absolute",
          top: -10,
          right: 50,
        }}
      >
        Admin
      </Text>
      <Text
        style={{
          color: "#F2994A",
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        Mike Mazowski
      </Text>
      <Text
        style={{
          color: "#1B1A57",
        }}
      >
        Hello guys, we have discussed about post-corona vacation plan and our
        decision is to go to Bali. We will have a very big party after this
        corona ends! These are some images about our destination
      </Text>
      <Text
        style={{
          color: "#A1A1BC",
          textAlign: "right",
        }}
      >
        16.04
      </Text>
    </View>
  );
};
