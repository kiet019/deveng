import * as React from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import { Dialog, Icon, Portal, Text } from "react-native-paper";

export const SelectCountry = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <>
      <Pressable
        onPress={() => {
          setVisible(true);
        }}
        style={{
          marginTop: 20,
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: 13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
        }}
      >
        <TextInput
          readOnly
          style={{
            fontSize: 14,
            fontWeight: "300",
            color: "#364356",
          }}
          placeholder="You live in?"
          placeholderTextColor={"#364356"}
        />
        <Icon color="#364356" source={"chevron-down"} size={20}/>
      </Pressable>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ borderRadius: 5, backgroundColor: "white" }}
        >
          <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
            <Text>This is a scrollable area</Text>
          </ScrollView>
        </Dialog>
      </Portal>
    </>
  );
};

export const SelectDistrict = () => {
    const [visible, setVisible] = React.useState(false);
  
    const hideDialog = () => setVisible(false);
  
    return (
      <>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}
          style={{
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 13,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFF",
          }}
        >
          <TextInput
            readOnly
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "#364356",
            }}
            placeholder="District*"
            placeholderTextColor={"#364356"}
          />
          <Icon color="#364356" source={"chevron-down"} size={20}/>
        </Pressable>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{ borderRadius: 5, backgroundColor: "white" }}
          >
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              <Text>This is a scrollable area</Text>
            </ScrollView>
          </Dialog>
        </Portal>
      </>
    );
  };
  