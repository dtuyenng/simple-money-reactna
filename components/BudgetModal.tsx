import React, { useState } from "react";
import AppInput from "./AppInput";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TextInputProps,
  KeyboardAvoidingView,
} from "react-native";

interface Props {
  modalBudgetVisible: boolean;
  // handleBudgetLimitSave: (value: number) => void;
  // handleBudgetNameSave: (value: string) => void;
  handleUpdateBudget: (budgetName: string, budgetLimit: number) => void;
  handleCancel: () => void;
  totalBudget: number;
  currBudgetName: string;
}

function BudgetModal({
  modalBudgetVisible,
  handleUpdateBudget,
  handleCancel,
  currBudgetName,
  totalBudget,
}: Props) {
  const [budgetLimit, setBudgetLimit] = useState(totalBudget);
  const [budgetName, setBudgetName] = useState(currBudgetName);
  return (
    <>
      <Modal
        visible={modalBudgetVisible}
        animationType="slide"
        transparent={true}
      >
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <View style={styles.content}>
            <Text style={styles.title}>{currBudgetName}</Text>

            <AppInput
              label="Budget Name"
              icon="reorder-four-outline"
              defaultValue={budgetName}
              onChangeText={(value) => setBudgetName(value)}
            />

            <AppInput
              label="Budget Limit"
              icon="cash-outline"
              keyboardType="numeric"
              defaultValue={budgetLimit.toString()}
              onChangeText={(value) => setBudgetLimit(Number(value))}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Save"
                onPress={() => {
                  handleUpdateBudget(budgetName, budgetLimit);
                }}
              />
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
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export default BudgetModal;
