import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  title: string;
}

function AddItemButton({ onPress, title }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="plussquareo" size={45} color="orange" />
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
} //Change button component to a touchablewithoutfeedback

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
  },
  buttonIcon: {
    color: "orange",
    fontSize: 60,
  },
  buttonTitle: {
    color: "black",
    fontWeight: "bold",
  },
});

export default AddItemButton;
