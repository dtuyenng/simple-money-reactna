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

  function handleBudgetLimitSave(value: number) {
    const updatedBudget = { ...budget, totalBudget: value };
    setBudget(updatedBudget);
    setModalBudgetVisible(false);
  }
  function handleSaveItem(itemPrice: string, itemDesc: string) {
    const newItem = {
      id: 69,
      name: itemDesc,
      amount: Number(itemPrice),
      date: new Date("2023-11-24"),
    };
    const updatedBudget = budget;
    updatedBudget.expenses.push(newItem);
    setBudget(updatedBudget);
    setModalItemVisible(false);
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
          handleCancel={() => setModalItemVisible(false)}
          handleSaveItem={handleSaveItem}
        ></AddItemModal>
        <View>
          <BudgetModal
            modalBudgetVisible={modalBudgetVisible}
            handleBudgetLimitSave={handleBudgetLimitSave}
            handleCancel={() => setModalBudgetVisible(false)}
            currBudgetName={budget.budgetName}
            totalBudget={budget.totalBudget}
          ></BudgetModal>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 35,
    flex: 1,
  },
  header: {
    //backgroundColor: "red",

    flexDirection: "row",
    justifyContent: "space-around",
    width: 335,
  },
  content: {
    //backgroundColor: "yellow",
  },
});
