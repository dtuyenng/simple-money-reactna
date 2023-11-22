import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  itemName: string;
  itemCost: string;
  purchaseDate: string;
  onPress: any;
  renderRightActions: any;
}

function ListItem({
  itemName,
  itemCost,
  purchaseDate,
  onPress,
  renderRightActions,
}: Props) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemName}>{itemName}</Text>
              <Text style={styles.itemCost}>{itemCost}</Text>
            </View>
            <Text style={styles.purchaseDate}>{purchaseDate}</Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 300,
    marginLeft: 20,
    paddingRight: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: "column",
    borderTopWidth: 2,
    borderTopColor: "#eeeeee",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  purchaseDate: {
    marginLeft: 5,
  },
  itemName: {
    fontWeight: "bold",
    color: "dodgerblue",
  },
  itemCost: {
    fontWeight: "bold",
  },
});

export default ListItem;
