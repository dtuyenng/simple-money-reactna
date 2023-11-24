import { StyleSheet, Image, Text, View } from "react-native";

interface Props {
  purchasedItems: {
    id: number;
    name: string;
    amount: number;
    date: Date;
  }[];
}

function BudgetStatusView({ purchasedItems }: Props) {
  function TotalSpent(purchasedItems: any) {
    let totalSpent = 0;
    for (let key in purchasedItems) {
      totalSpent += 100 * purchasedItems[key].itemCost;
    }
    return totalSpent / 100;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.budgetIcon}
          source={require("../assets/budgeticon.png")}
        />
      </View>
      <View style={styles.budgetDetails}>
        <Text style={styles.budgetStatus}>Budget Status</Text>
        <Text style={styles.budgetSpent}>${TotalSpent(purchasedItems)}</Text>
        <Text style={styles.budgetAvailable}>$1029.00 Available</Text>
        <Text style={styles.budgetLimit}>$2000 Limit</Text>
      </View>
    </View>
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
