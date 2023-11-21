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
    backgroundColor: "blue",
    flexDirection: "row"
  },
});

export default AddItemButton;
