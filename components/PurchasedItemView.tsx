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
      <Text style={styles.title}>Items Purchased</Text>

      <FlatList
        data={purchasedItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            itemName={item.itemName}
            itemCost={item.itemCost}
            purchaseDate={item.purchaseDate}
            onPress={() => item}
            renderRightActions={() => (
              <View style={{ backgroundColor: "red", width: 40, height: 40 }}>
                <Text>Remove Item</Text>
              </View>
            )}
          ></ListItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 335,
    marginTop: 10,
    flex: 1,
    elevation: 10,
    shadowColor: "black",
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
});
export default PurchasedItemView;
