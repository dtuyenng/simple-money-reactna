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
  handleBudgetLimitSave: (value: number) => void;
  handleCancel: () => void;
  totalBudget: number;
  budgetName: string;
}

function BudgetModal({
  modalBudgetVisible,
  handleBudgetLimitSave,
  handleCancel,
  budgetName,
  totalBudget,
}: Props) {
  const [budgetLimit, setBudgetLimit] = useState(totalBudget);
  return (
    <>
      <Modal
        visible={modalBudgetVisible}
        animationType="slide"
        transparent={false}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <Text>{budgetLimit}</Text>
            <TextInput
              defaultValue={budgetLimit.toString()}
              keyboardType="numeric"
              onChangeText={(value) => setBudgetLimit(Number(value))}
            ></TextInput>
            <View style={styles.buttonContainer}>
              <Button
                title="Save"
                onPress={() => handleBudgetLimitSave(budgetLimit)}
              />
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
