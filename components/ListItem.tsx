import { StyleSheet, Text, View } from "react-native";

interface Props {
  itemName: string;
  itemCost: string;
  purchaseDate: string;
}

function ListItem({ itemName, itemCost, purchaseDate }: Props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text>{itemName}</Text>
        <Text>{itemCost}</Text>
      </View>

      <Text style={styles.purchaseDate}>{purchaseDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "dodgerblue",
    width: 300,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    flexDirection: "column",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  purchaseDate: {
    marginLeft: 5,
  },
});

export default ListItem;
