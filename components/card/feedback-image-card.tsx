import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export interface FeedbackImageCardProps {
  title: string;
  imageSrc: any;
}
export const FeedbackImageCard = ({
  props,
  active = false,
}: {
  props: FeedbackImageCardProps;
  active?: boolean;
}) => {
  return (
    <View
      style={{
        width: 60,
        alignItems: "center",
      }}
    >
      <Image
        source={props.imageSrc}
        style={{
          width: 40,
          height: 40,
          opacity: active ? 1 : 0.3,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          color: active ? "#105955" : "#A5E0DD",
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
