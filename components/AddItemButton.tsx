import { StyleSheet, Text, View } from "react-native";

function AddItemButton() {
  return (
    <View style={styles.container}>
      <Text>Add Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 10,
    shadowColor: "black",
    marginLeft: 10,
  },
});

export default AddItemButton;
