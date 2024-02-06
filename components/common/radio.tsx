import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { GridBox } from "./grid";
import { useEffect, useState } from "react";

export const RadioGender = ({ setRadioValue }: { setRadioValue: any }) => {
  const [checked, setChecked] = useState("first");
  useEffect(() => {
    if (setRadioValue) {
        setRadioValue(checked)
    }
  }, [checked])
  return (
    <View style={{marginRight: 150}}>
      <Text
        style={{
          width: "100%",
          color: "#636D77",
          marginTop: 20,
          marginBottom: 10,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        What is your gender?
      </Text>
      <GridBox spacing={0}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="first"
            color="#ACACAC"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{color: "#364356"}}>Male</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="second"
            color="#ACACAC"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={{color: "#364356"}}>Female</Text>
        </View>
      </GridBox>
    </View>
  );
};


export const RadioRole = ({ setRadioValue }: { setRadioValue: any }) => {
    const [checked, setChecked] = useState("first");
    useEffect(() => {
      if (setRadioValue) {
          setRadioValue(checked)
      }
    }, [checked])
    return (
      <View style={{marginRight: 150}}>
        <Text
          style={{
            width: "100%",
            color: "#636D77",
            marginTop: 20,
            marginBottom: 10,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          You are?
        </Text>
        <GridBox spacing={0}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="first"
              color="#ACACAC"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{color: "#364356"}}>Student</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="second"
              color="#ACACAC"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={{color: "#364356"}}>Teacher</Text>
          </View>
        </GridBox>
      </View>
    );
  };
  