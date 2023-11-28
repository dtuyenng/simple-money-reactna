import React from "react";
import AppInput from "./AppInput";
import { Ionicons } from "@expo/vector-icons";
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
}

function AddItemModal({
  modalItemVisible,
  setModalVisible,
  handleCancel,
}: Props) {
  /// SHow Available MOney and SPent money in big letters so user knows the status implicitely
  return (
    <>
      <Modal
        visible={modalItemVisible}
        onRequestClose={setModalVisible}
        animationType="slide"
        transparent={true}
      >
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <View style={styles.modal}>
            <AppInput
              label="Hi"
              icon="ios-cart-outline"
              placeholder="Hi"
              keyboardType="numeric"
            ></AppInput>

            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={() => console.log("")} />
              <Button title="Cancel" onPress={handleCancel} />
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
  modal: {
    width: "95%",
    height: 400,
    backgroundColor: "white",
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
  },
});

export default AddItemModal;
