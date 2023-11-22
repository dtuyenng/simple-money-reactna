import { StyleSheet, Image, Text, View } from "react-native";

function BudgetStatusView() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.budgetIcon}
          source={require("../assets/budgeticon.png")}
        />
      </View>
      <View style={styles.budgetDetails}>
        <Text>Budget Status</Text>
        <Text>$759.23</Text>
        <Text>$1029.00 Available</Text>
        <Text>$2000 Limit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    flex: 0.8,
    elevation: 10,
    shadowColor: "black",
  },
  budgetDetails: {
    flexDirection: "column",
  },
  budgetIcon: {
    margin: 10,
    height: 70,
    width: 70,
  },
});

export default BudgetStatusView;
