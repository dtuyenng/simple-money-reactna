import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

interface Props {
  budget: {
    totalBudget: number;
    budgetName: string;
    expenses: Expense[];
  };
  onPress: () => void;
}
interface Expense {
  id: number;
  name: string;
  amount: number;
  date: Date;
}

function BudgetStatusView({ budget, onPress }: Props) {
  function TotalSpent(budget: { expenses: Expense[] }) {
    let totalSpent = 0;
    for (let expense of budget.expenses) {
      totalSpent += 100 * expense.amount;
    }
    return totalSpent / 100;
  }
  function Available(budget: { totalBudget: number; expenses: Expense[] }) {
    return budget.totalBudget - TotalSpent(budget);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          style={styles.budgetIcon}
          source={require("../assets/budgeticon.png")}
        />
      </View>
      <View style={styles.budgetDetails}>
        <Text style={styles.budgetStatus}>{budget.budgetName}</Text>
        <Text style={styles.budgetSpent}>${TotalSpent(budget)}</Text>
        <Text style={styles.budgetAvailable}>
          ${Available(budget)} Available
        </Text>
        <Text style={styles.budgetLimit}>${budget.totalBudget} Limit</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 200,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    flex: 1,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
  },
  budgetStatus: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
  budgetSpent: {
    fontWeight: "bold",
    fontSize: 20,
  },
  budgetAvailable: {
    color: "green",
  },
  budgetLimit: {
    color: "dodgerblue",
  },

  budgetDetails: {
    paddingTop: 10,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  budgetIcon: {
    margin: 10,
    height: 70,
    width: 70,
  },
});

export default BudgetStatusView;
