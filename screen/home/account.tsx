import { Icon, Text } from "react-native-paper";
import { SignInWelcomeLayout } from "../../components/layout/signin-welcome";
import { Card } from "../../components/common/card";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { IconUser } from "../../components/common/icon";

const account = require("../../assets/images/account-image.png");
const memuList: MenuItemProps[] = [
  {
    title: "My Account",
    icon: "account-outline",
    detail: "Make changes to your account",
  },
  {
    title: "Saved Beneficiary",
    icon: "content-save-cog-outline",
    detail: "Manage your saved account",
  },
  {
    title: "Face ID / Touch ID",
    icon: "lock-outline",
    detail: "Manage your device security",
  },
  {
    title: "Two-Factor Authentication",
    icon: "shield-check-outline",
    detail: "Further secure your account for safety",
  },
  {
    title: "Log out",
    icon: "logout",
    detail: "Further secure your account for safety",
  },
];
const moreList: MenuItemProps[] = [
  {
    detail: "",
    icon: "bell-outline",
    title: "Help & Support",
  },
  {
    detail: "",
    icon: "heart-outline",
    title: "About App",
  },
];
export default function AccountScreen() {
  return (
    <SignInWelcomeLayout paddingTop={60}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Profile
        </Text>
        <Card
          style={{
            borderRadius: 5,
            marginVertical: 15,
            backgroundColor: "#0601b4",
          }}
        >
          <View style={styles.menuContainer}>
            <View style={styles.iconContainer}>
              <IconUser size={60} imageSrc={account} />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Itunuoluwa Abidoye
                </Text>
                <Text
                  style={{
                    color: "#D7D7D7",
                    marginTop: 2,
                  }}
                >
                  @Itunuoluwa
                </Text>
              </View>
            </View>
            <Icon source={"pencil-outline"} size={25} color="white" />
          </View>
        </Card>
        <Card
          style={{
            borderRadius: 5,
            paddingVertical: 15,
          }}
        >
          {memuList.map((menu, index) => (
            <MenuItem
              key={index}
              detail={menu.detail}
              icon={menu.icon}
              title={menu.title}
            />
          ))}
        </Card>
        <Text
          style={{
            color: "#181D27",
            marginVertical: 20,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          More
        </Text>
        <Card
          style={{
            borderRadius: 5,
            paddingVertical: 15,
          }}
        >
          {moreList.map((menu, index) => (
            <MenuItem
              key={index}
              detail={menu.detail}
              icon={menu.icon}
              title={menu.title}
            />
          ))}
        </Card>
      <View style={{ height: 100 }}></View>
      </ScrollView>
    </SignInWelcomeLayout>
  );
}
interface MenuItemProps {
  icon: string;
  title: string;
  detail: string;
}
const MenuItem = ({ icon, title, detail }: MenuItemProps) => {
  return (
    <View style={{ ...styles.menuContainer, marginVertical: 15 }}>
      <View style={styles.iconContainer}>
        <View
          style={{
            backgroundColor: "#f2f2fb",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Icon source={icon} size={20} color="#0601B4" />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {title}
          </Text>
          {detail !== "" ? (
            <Text
              style={{
                color: "#ABABAB",
                marginTop: 7,
                fontSize: 12,
              }}
            >
              {detail}
            </Text>
          ) : null}
        </View>
      </View>
      <Icon source={"chevron-right"} size={25} color="#ABABAB" />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 15,
  },
});
