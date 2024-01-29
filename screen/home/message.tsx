import { Pressable, ScrollView, TextInput, View } from "react-native";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import {
  MessageCard,
  MessageCardProps,
} from "../../components/card/message-card";

const user1 = require("../../assets/images/user-1.png");
const user2 = require("../../assets/images/user-2.png");
const user3 = require("../../assets/images/user-3.png");
const user4 = require("../../assets/images/user-4.png");
const messageList: MessageCardProps[] = [
  {
    alreadyRead: false,
    imageSrc: user1,
    message: "Pls take a look at the images.",
    name: "Darlene Steward",
    status: "busy",
    time: "18.31",
    totalUnread: 5,
  },
  {
    alreadyRead: false,
    imageSrc: user2,
    message: "Hello guys, we have discussed about ...",
    name: "Fullsnack Designers",
    status: "none",
    time: "16.04",
    totalUnread: 0,
  },
  {
    alreadyRead: false,
    imageSrc: user3,
    message: "Yes, that’s gonna work, hopefully. ",
    name: "Lee Williamson",
    status: "active",
    time: "06.12",
    totalUnread: 0,
  },
  {
    alreadyRead: true,
    imageSrc: user4,
    message: "Thanks dude 😉",
    name: "Ronald Mccoy",
    status: "inactive",
    time: "Yesterday",
    totalUnread: 0,
  },
];
export default function MessageScreen({ navigation }: any) {
  return (
    <SignInWelcomeLayout paddingTop={60} paddingHorizontal={20}>
      <TextInput
        style={{
          padding: 3,
          paddingHorizontal: 10,
          backgroundColor: "white",
          fontWeight: "bold",
          color: "black",
          borderRadius: 10,
        }}
        placeholder="Search for conversations..."
      />
      <ScrollView
        style={{
          marginVertical: 20,
          flex: 1,
        }}
      >
        {messageList.map((message, index) => (
          <Pressable
            onPress={() => {
              navigation.push("MessageDetail", {
                title: message.name,
                imageSrc: message.imageSrc,
              });
            }}
          >
            <View
              key={index}
              style={{
                marginVertical: 5,
              }}
            >
              <MessageCard props={message} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SignInWelcomeLayout>
  );
}
