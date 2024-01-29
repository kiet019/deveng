import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export interface MessageCardProps {
  imageSrc: any;
  status: "active" | "busy" | "inactive" | "none";
  totalUnread: number;
  time: string;
  name: string;
  message: string;
  alreadyRead: boolean;
}

const switchColor = (color: string) => {
  switch (color) {
    case "active":
      return "#4ce417";
    case "busy":
      return "#f2c94c";
    case "inactive":
      return "#bdbdbd";
    default:
      return "white";
  }
};

const alreadyReadIcon = require("../../assets/icons/already-read.png");
export const MessageCard = ({ props }: { props: MessageCardProps }) => {
  return (
    <View
      style={{
        backgroundColor: props.totalUnread > 0 ? "#e1eaf9" : "#f4f5f9",
        width: "auto",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            position: "relative",
            width: 50,
            height: 50,
            marginRight: 20,
          }}
        >
          <Image
            source={props.imageSrc}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              objectFit: "cover",
              position: "absolute",
            }}
          />
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              borderWidth: 3,
              bottom: 0,
              right: 0,
              position: "absolute",
              borderColor: "white",
              display: props.status === "none" ? "none" : "flex",
              backgroundColor: switchColor(props.status),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: 45,
          }}
        >
          <Text
            style={{
              color: "#1B1A57",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {props.name}
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {props.alreadyRead ? (
              <Image
                source={alreadyReadIcon}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 5
                }}
              />
            ) : null}
            <Text
              style={{
                fontSize: 14,
                color: "#4F5E7B",
              }}
            >
              {props.message}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          height: 50,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#333333",
          }}
        >
          {props.time}
        </Text>
        <View
          style={{
            borderRadius: 25,
            width: 25,
            height: 25,
            display: props.totalUnread > 0 ? "flex" : "none",
            backgroundColor: "#2F80ED",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {props.totalUnread}
          </Text>
        </View>
      </View>
    </View>
  );
};
