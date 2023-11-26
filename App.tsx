import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Button,
} from "react-native";
import ListItem from "./components/ListItem";
import PurchasedItemView from "./components/PurchasedItemView";
import BudgetStatusView from "./components/BudgetStatusView";
import AddItemButton from "./components/AddItemButton";
import { AnimationEvent } from "react";

//main data import
import purchasedItems from "./components/purchasedItems";
import monthlyBudget from "./Budget";

export default function App() {
  const [modalItemVisible, setModalItemVisible] = useState(false);
  const [modalBudgetVisible, setModalBudgetVisible] = useState(false);
  const [budget, setBudget] = useState(monthlyBudget);

  function handleDeleteItem(item: any) {
    // purchasedItems = purchasedItems.filter((value) => value.id !== item.id); ERRROOOR use items not purchaseditems
    // const newItems = purchasedItems;
    // setItems(newItems);
    console.log(item);
    const updatedExpense = budget.expenses.filter(
      (value) => value.id !== item.id
    );
    const updatedBudget = { ...budget, expenses: updatedExpense };
    setBudget(updatedBudget);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BudgetStatusView
            budget={budget}
            onPress={() => setModalBudgetVisible(true)}
          ></BudgetStatusView>
          <AddItemButton
            title="Add Item"
            onPress={() => setModalItemVisible(true)}
          />
        </View>
        <View style={styles.content}>
          <PurchasedItemView
            purchasedItems={budget.expenses}
            onPress={handleDeleteItem}
          ></PurchasedItemView>
        </View>
        <Modal visible={modalItemVisible} animationType="slide">
          <SafeAreaView>
            <Text>PlaceHolder ADD ITEM FORM</Text>
            <Button title="Cancel" onPress={() => setModalItemVisible(false)} />
          </SafeAreaView>
        </Modal>

        {/* ////////////// ADD option to close modal when user tap on background by wrapping background inside a touchable component
        //// can calling */}

        <Modal
          visible={modalBudgetVisible}
          onRequestClose={() => setModalBudgetVisible(false)}
          animationType="slide"
          transparent={true}
        >
          <SafeAreaView
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 500,
                backgroundColor: "green",
                justifyContent: "flex-end",
              }}
            >
              <Text>PlaceHolder Budget FORM</Text>
              <Button
                title="Cancel"
                onPress={() => setModalBudgetVisible(false)}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eeeeee",
    alignItems: "center",
    paddingTop: 35,
  },
  header: {
    //backgroundColor: "red",
    flex: 0.17,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 335,
  },
  content: {
    //backgroundColor: "yellow",
    flex: 1,
  },
  modalBudget: {
    height: 200,
    flex: 0.5,
    backgroundColor: "green",
    justifyContent: "flex-end",
  },
});
