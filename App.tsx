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
import BudgetModal from "./components/BudgetModal";
import AddItemModal from "./components/AddItemModal";

//main data import
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

        <AddItemModal
          modalItemVisible={modalItemVisible}
          setModalVisible={() => setModalItemVisible(false)}
        ></AddItemModal>

        {/* ////////////// ADD option to close modal when user tap on background by wrapping background inside a touchable component
        //// can calling */}

        <BudgetModal
          modalBudgetVisible={modalBudgetVisible}
          setModalVisible={() => setModalBudgetVisible(false)}
          budgetName={budget.budgetName}
          totalBudget={budget.totalBudget}
        ></BudgetModal>
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
