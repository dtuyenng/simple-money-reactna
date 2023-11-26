import React, { useState } from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import AppTextInput from "./AppTextInput";

interface Props {
  modalBudgetVisible: boolean;
  setModalVisible: () => void;
  totalBudget: number;
  budgetName: string;
}

function BudgetModal({
  modalBudgetVisible,
  setModalVisible,
  budgetName,
  totalBudget,
}: Props) {
  return (
    <>
      <Modal
        visible={modalBudgetVisible}
        onRequestClose={setModalVisible}
        animationType="slide"
        transparent={false}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.modal}>
            <AppTextInput inputLabel="Budget's Name" placeholder={budgetName} />
            <AppTextInput
              inputLabel="Budget Limit ($)"
              placeholder={"$" + totalBudget.toString()}
            />
            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={setModalVisible} />
              <Button title="Cancel" onPress={setModalVisible} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "95%",
    height: "95%",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 10,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default BudgetModal;
