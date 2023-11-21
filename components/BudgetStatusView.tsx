import { StyleSheet, Text, View } from "react-native";

function BudgetStatusView() {
  return (
    <View style={styles.container}>
      <Text>Budget Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    flexDirection: "row",
    flex: 0.8,
  },
});

export default BudgetStatusView;
