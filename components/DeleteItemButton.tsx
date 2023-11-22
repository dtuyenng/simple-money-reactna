import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

function DeleteItemButton({ onPress }: any) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ backgroundColor: "red", width: 40, height: 40 }}>
        <Text>Remove Item</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeleteItemButton;
