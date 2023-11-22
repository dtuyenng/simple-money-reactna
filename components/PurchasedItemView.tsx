import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";
import DeleteItemButton from "./DeleteItemButton";
import { useState } from "react";

interface Props {
  purchasedItems: {
    id: number;
    itemName: string;
    itemCost: string;
    purchaseDate: string;
  }[];
}

function PurchasedItemView({ purchasedItems }: Props) {
  const [items, setItems] = useState(purchasedItems);

  function handleDeleteItem(item: any) {
    // purchasedItems = purchasedItems.filter((value) => value.id !== item.id); ERRROOOR use items not purchaseditems
    // const newItems = purchasedItems;
    // console.log(purchasedItems);
    // console.log(newItems);
    // setItems(newItems);
    const newItems = items.filter((value) => value.id !== item.id);
    setItems(newItems);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items ({items.length}) Purchased: </Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            itemName={item.itemName}
            itemCost={item.itemCost}
            purchaseDate={item.purchaseDate}
            onPress={() => item}
            renderRightActions={() => (
              <DeleteItemButton onPress={() => handleDeleteItem(item)} />
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
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 20,
    width: 335,
    marginTop: 10,
    flex: 1,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default PurchasedItemView;
