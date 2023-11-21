import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";

interface Props {
  purchasedItems: {
    id: number;
    itemName: string;
    itemCost: string;
    purchaseDate: string;
  }[];
}

function PurchasedItemView({ purchasedItems }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchased Items</Text>

      <FlatList
        data={purchasedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            itemName={item.itemName}
            itemCost={item.itemCost}
            purchaseDate={item.purchaseDate}
          ></ListItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    marginTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default PurchasedItemView;
