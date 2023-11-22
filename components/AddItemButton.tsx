import { StyleSheet, Text, View } from "react-native";

function AddItemButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonIcon}>+</Text>
      <Text style={styles.buttonTitle}>Add Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: "white",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
  },
  buttonIcon: {
    color: "orange",
    fontSize: 60,
  },
  buttonTitle: {
    color: "dodgerblue",
    fontWeight: "bold",
  },
});

export default AddItemButton;
