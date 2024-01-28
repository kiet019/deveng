import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ReadingIcon = require("../../assets/icons/reading-icon.png");
const WritingIcon = require("../../assets/icons/writing-icon.png");
const SpeakingIcon = require("../../assets/icons/speaking-icon.png");
const ListeningIcon = require("../../assets/icons/listening-icon.png");
// #14B8A6
export const ReadingCard = ({ onPress }: { onPress?: any }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
        if (onPress) {
          onPress();
        }
      }}
    >
      <View
        style={{
          ...styles.card,
          borderColor: isSelected ? "#14B8A6" : "#e4e4e7",
        }}
      >
        <View style={{ ...styles.icon, backgroundColor: "#fefce8" }}>
          <Image source={ReadingIcon} style={styles.image} />
        </View>
        <Text style={styles.text}>Reading</Text>
      </View>
    </Pressable>
  );
};
export const WritingCard = ({ onPress }: { onPress?: any }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
        if (onPress) {
          onPress();
        }
      }}
    >
      <View
        style={{
          ...styles.card,
          borderColor: isSelected ? "#14B8A6" : "#e4e4e7",
        }}
      >
        <View style={{ ...styles.icon, backgroundColor: "#f0fdfa" }}>
          <Image source={WritingIcon} style={styles.image} />
        </View>
        <Text style={styles.text}>Writing</Text>
      </View>
    </Pressable>
  );
};
export const SpeakingCard = ({ onPress }: { onPress?: any }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
        if (onPress) {
          onPress();
        }
      }}
    >
      <View
        style={{
          ...styles.card,
          borderColor: isSelected ? "#14B8A6" : "#e4e4e7",
        }}
      >
        <View style={{ ...styles.icon, backgroundColor: "#fef2f2" }}>
          <Image source={SpeakingIcon} style={styles.image} />
        </View>
        <Text style={styles.text}>Writing</Text>
      </View>
    </Pressable>
  );
};
export const ListeningCard = ({ onPress }: { onPress?: any }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Pressable
      onPress={() => {
        setIsSelected(!isSelected);
        if (onPress) {
          onPress();
        }
      }}
    >
      <View
        style={{
          ...styles.card,
          borderColor: isSelected ? "#14B8A6" : "#e4e4e7",
        }}
      >
        <View style={{ ...styles.icon, backgroundColor: "#f5f3ff" }}>
          <Image source={ListeningIcon} style={styles.image} />
        </View>
        <Text style={styles.text}>Writing</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "auto",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "white",
  },
  image: {
    objectFit: "contain",
    width: 20,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 5,
    fontWeight: "bold",
  },
});
