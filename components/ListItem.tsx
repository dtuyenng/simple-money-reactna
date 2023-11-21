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
              <Text>{itemName}</Text>
              <Text>{itemCost}</Text>
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
