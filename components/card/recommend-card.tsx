import { Image, Text, View } from "react-native";
import { TextChip } from "../common/chip";

export interface RecomendCardProps {
  imageSrc: any;
  title: string;
  detail: string;
}

export const RecomendCard = ({ props }: { props: RecomendCardProps }) => {
  return (
    <View style={{
      borderRadius: 20,
      backgroundColor: "white",
      width: 350,
    }}>
      <Image source={props.imageSrc}  style={{
        objectFit: "contain",
        width: 350,
        height: 196,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}/>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{fontWeight: "bold"}}>{props.title}</Text>
          <Text style={{color: "#585858"}}>{props.detail}</Text>
        </View>
        <TextChip>Start</TextChip>
      </View>
    </View>
  );
};
