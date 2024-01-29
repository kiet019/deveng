import { Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../components/layout/signin-welcome";
import { MessageHeader } from "../components/header/props-header";

export default function MessageDetailScreen({ route, navigation }: any) {
  /* 2. Get the param */
  const { imageSrc, title } = route.params;
  return (
    <SignInWelcomeLayout>
      <MessageHeader goBack={() => {
        navigation.goBack()
      }} imageSrc={imageSrc} title={title} />
      <Text>hello</Text>
    </SignInWelcomeLayout>
  );
}
