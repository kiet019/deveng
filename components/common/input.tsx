import React, { SetStateAction, useRef, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const TitleInput = ({
  placeholder,
  onChangeText,
  title,
  password = false,
}: {
  title: string;
  placeholder: string;
  onChangeText: SetStateAction<any>;
  password?: boolean;
}) => {
  const [input, setInput] = useState("");

  const handleTextChange = (newText: string) => {
    setInput(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  /*
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkValidEmail, setCheckValidEmail] = useState(false)
  const [seePassword, setSeePassword] = useState(true)

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S+$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password cannot contain white spaces!';
    }

    const isContainsUpperCase = /^(?=.[A-Z]).+$/;
    if (!isContainsUpperCase.test(value)) {
      return 'Password must contain at least one Upper case character!';
    }

    const isContainsLowerCase = /^(?=.[a-z]).+$/;
    if (!isContainsLowerCase.test(value)) {
      return 'Password must contain at least one Lower case character!';
    }

    const isContainsNumber = /^(?=.[0-9]).+$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Number!';
    }

    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    if (!checkPassword) {
      alert('Login Success');
    } else {
      alert(checkPassword);
    };
  };
*/


//Login
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={"#364356"}
          secureTextEntry={password}
          value={input}
          onChangeText={handleTextChange}
        />  
      </View>
    </View>
  );
};


//cái này bên Booking or Detail Booking
export const OutlineInput = ({
  placeholder,
  onChangeText,
  title,
  password = false,
}: {
  title: string;
  placeholder: string;
  onChangeText: SetStateAction<any>;
  password?: boolean;
}) => {
  const [input, setInput] = useState("");

  const handleTextChange = (newText: string) => {
    setInput(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerOutlineContainer}>
        <TextInput
          style={styles.outlinedInput}
          placeholder={placeholder}
          placeholderTextColor={"#364356"}
          secureTextEntry={password}
          value={input}
          onChangeText={handleTextChange}
        />
        
      </View>
    </View>
  );
};


//OTP
export const NumberInput = ({
  onChangeText,
  title,
  password = false,
}: {
  title: string;
  placeholder: string;
  onChangeText: SetStateAction<any>;
  password?: boolean;
}) => {
  const [input, setInput] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const focusNextInput = (index: number) => {
    if (inputRefs[index + 1]) {
      //@ts-ignore
      inputRefs[index + 1].current.focus();
    }
  };
  const handleTextChange = (newText: string, index: number) => {
    if (newText.length <= 1) {
      const updateInput = input;
      updateInput[index] = newText;
      setInput(updateInput);
      if (onChangeText) {
        onChangeText(input.join(""));
        console.log(input.join(""));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {inputRefs.map((inputRef, index) => (
            <TextInput
              key={index}
              ref={inputRef}
              keyboardType="numeric"
              style={styles.numberInput}
              secureTextEntry={password}
              value={input[index]}
              onChangeText={(e) => {
                handleTextChange(e, index);
                focusNextInput(index);
              }}
              returnKeyType={index === inputRefs.length - 1 ? "done" : "next"}
            />
          ))}
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#636D77",
    fontSize: 16,
    fontWeight: "bold",
  },
  innerContainer: {
    width: 350,
  },
  numberInput: {
    marginTop: 11,
    padding: 19,
    paddingLeft: 23,
    paddingTop: 18,
    borderRadius: 4,
    backgroundColor: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    color: "#364356",
    flex: 1,
    marginHorizontal: 0.5,
  },
  input: {
    marginTop: 11,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 19,
    backgroundColor: "#FFF",
    fontSize: 14,
    fontWeight: "300",
    color: "#364356",
  },
  outlinedInput: {
    fontSize: 20,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 26
  },
  innerOutlineContainer: {
    width:270,
  }
});
