import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Modal } from "react-native";

interface Props {
  onPress: () => void;
}

function AddItemButton({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonIcon}>+</Text>
      <Button title="Add Item" onPress={onPress} />
    </View>
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
    color: "dodgerblue",
    fontWeight: "bold",
  },
});

export default AddItemButton;
