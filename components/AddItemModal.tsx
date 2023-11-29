import React from "react";
import AppInput from "./AppInput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

interface Props {
  modalItemVisible: boolean;
  setModalVisible: () => void;
  handleCancel: () => void;
  handleSaveItem: (itemPrice: string, itemDesc: string) => void;
}

function AddItemModal({
  modalItemVisible,
  setModalVisible,
  handleCancel,
  handleSaveItem,
}: Props) {
  /// SHow Available MOney and SPent money in big letters so user knows the status implicitely
  const [itemPrice, setItemPrice] = useState("0");
  const [itemDesc, setItemDesc] = useState("");
  return (
    <>
      <Modal
        visible={modalItemVisible}
        onRequestClose={setModalVisible}
        animationType="slide"
        transparent={true}
      >
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <View style={styles.content}>
            <Text style={styles.title}>
              Add Item{itemPrice} {itemDesc}
            </Text>

            <AppInput
              style={styles.itemPrice}
              label="Item Price ($)"
              placeholder="0.00"
              keyboardType="numeric"
              onChangeText={(value) => setItemPrice(value)}
            ></AppInput>
            <AppInput
              label="Item Description"
              icon="ios-cart-outline"
              placeholder="i.e Milk"
              onChangeText={(value) => setItemDesc(value)}
            ></AppInput>

            <View style={styles.buttonContainer}>
              <Button
                title="Save"
                onPress={() => {
                  handleSaveItem(itemPrice, itemDesc);
                }}
              />
              <Button title="Cancel" color={"red"} onPress={handleCancel} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  content: {
    width: "95%",
    height: 400,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    padding: 10,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //backgroundColor: "red",
    borderTopWidth: 2,
    borderTopColor: "#eeeeee",
    marginTop: 10,
    paddingTop: 10,
  },
  title: {
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
    marginTop: 10,
    textAlign: "center",
  },
  itemPrice: {
    width: 200,
    backgroundColor: "white",
    marginLeft: 10,
    fontSize: 70,
    height: 80,
    textAlign: "center",
  },
});

export default AddItemModal;
