import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import PurchasedItemView from "./components/PurchasedItemView";
import purchasedItems from "./components/purchasedItems";

import BudgetStatusView from "./components/BudgetStatusView";
import AddItemButton from "./components/AddItemButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BudgetStatusView></BudgetStatusView>
        <AddItemButton></AddItemButton>
      </View>
      <View style={styles.content}>
        <PurchasedItemView purchasedItems={purchasedItems}></PurchasedItemView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "red",
    flex: 0.2,
    flexDirection: "row",
  },
  content: {
    backgroundColor: "yellow",
    flex: 0.8,
  },
});
