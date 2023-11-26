import React from "react";
import {
  Modal,
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";

interface Props {
  modalBudgetVisible: boolean;
  setModalVisible: () => void;
}

function BudgetModal({ modalBudgetVisible, setModalVisible }: Props) {
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
            <Text>PlaceHolder Budget FORM</Text>
            <Button title="Cancel" onPress={setModalVisible} />
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
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 10,
  },
});

export default BudgetModal;
