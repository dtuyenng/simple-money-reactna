import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends TextInputProps {
  label: string;
  icon: any;
}

function AppInput({ label, icon, ...otherProps }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        {icon && (
          <Ionicons style={styles.icon} name={icon} size={15} color="black" />
        )}
        <TextInput
          style={styles.textInput}
          {...(otherProps as TextInputProps)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  textInput: {
    height: 40,
    width: "80%",
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center",
  },
  icon: {
    height: 40,
    width: 40,
    paddingTop: 12,
    paddingLeft: 12,
    // backgroundColor: "yellow",
  },
  label: {
    paddingLeft: 5,
    marginBottom: 2,
    textAlign: "left",
    width: "100%",
  },
});

export default AppInput;
