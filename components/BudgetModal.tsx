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
  handleSave: () => void;
  handleCancel: () => void;
  totalBudget: number;
  budgetName: string;
}

function BudgetModal({
  modalBudgetVisible,
  handleSave,
  handleCancel,
  budgetName,
  totalBudget,
}: Props) {
  return (
    <>
      <Modal
        visible={modalBudgetVisible}
        animationType="slide"
        transparent={false}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <AppTextInput
              inputLabel="Budget's Name"
              defaultValue={budgetName}
            />
            <AppTextInput
              inputLabel="Budget Limit ($)"
              defaultValue={"$" + totalBudget.toString()}
              keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
              <Button title="Save" onPress={handleSave} />
              <Button title="Cancel" onPress={handleCancel} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "95%",
    height: "95%",
    backgroundColor: "#green",
    borderRadius: 20,
    padding: 10,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default BudgetModal;
