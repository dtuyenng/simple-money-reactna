import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DeleteItemButton({ onPress }: any) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={25} color={"white"} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginTop: 6,
    marginRight: 4,
    backgroundColor: "#FA8072",
    width: 45,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteItemButton;
