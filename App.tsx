import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import PurchasedItemView from "./components/PurchasedItemView";
import BudgetStatusView from "./components/BudgetStatusView";
import AddItemButton from "./components/AddItemButton";

//main data import
import purchasedItems from "./components/purchasedItems";
import monthlyBudget from "./Budget";

export default function App() {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BudgetStatusView budget={budget}></BudgetStatusView>
        <AddItemButton></AddItemButton>
      </View>
      <View style={styles.content}>
        <PurchasedItemView
          purchasedItems={budget.expenses}
          onPress={handleDeleteItem}
        ></PurchasedItemView>
      </View>
    </SafeAreaView>
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
});
