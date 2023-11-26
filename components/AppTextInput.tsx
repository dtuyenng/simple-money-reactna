import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  icon?: any;
  inputLabel?: string;
  placeholder?: string;
}
function AppTextInput({ icon, inputLabel, placeholder }: Props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{inputLabel}</Text>
        <View style={styles.innerContainer}>
          {icon && <MaterialCommunityIcons name={icon} />}
          <TextInput style={styles.textInput} placeholder={placeholder} />
        </View>
      </View>
    </>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "column",
    justifyContent: "flex-start",
    height: 150,
    width: "100%",
  },
  innerContainer: {
    borderRadius: 20,
    flexDirection: "row",
    borderWidth: 0,
    backgroundColor: "white",
    fontSize: 50,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
  },
  textInput: {
    width: "100%",
    fontSize: 50,
    padding: 5,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
