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
              <View style={styles.nameAndPrice_Container}>
                <Text style={styles.itemName}>{itemName}</Text>
                <Text style={styles.itemCost}>{itemCost}</Text>
              </View>

              <View style={styles.date_Container}>
                <Text style={styles.purchaseDate}>{purchaseDate}</Text>
              </View>
            </View>

            <View style={styles.chevron}>
              <Text>›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // backgroundColor: "green",
    width: 320,
    marginLeft: 20,
    paddingRight: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: "#eeeeee",
    alignItems: "center",
  },
  nameAndPrice_Container: {
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevron: {
    // backgroundColor: "red",
    marginLeft: 3,
  },
  date_Container: {
    //backgroundColor: "yellow",
  },
  innerContainer: {
    flex: 0.98,
    flexDirection: "column",
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

// import {
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Swipeable from "react-native-gesture-handler/Swipeable";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// interface Props {
//   itemName: string;
//   itemCost: string;
//   purchaseDate: string;
//   onPress: any;
//   renderRightActions: any;
// }

// function ListItem({
//   itemName,
//   itemCost,
//   purchaseDate,
//   onPress,
//   renderRightActions,
// }: Props) {
//   return (
//     <GestureHandlerRootView>
//       <Swipeable renderRightActions={renderRightActions}>
//         <TouchableOpacity onPress={onPress}>

//           <View style={styles.itemContainer}>
//             <View style={styles.innerContainer}>
//               <Text style={styles.itemName}>{itemName}</Text>
//               <Text style={styles.itemCost}>{itemCost}</Text>
//             </View>
//             <Text style={styles.purchaseDate}>{purchaseDate}</Text>
//           </View>

//         </TouchableOpacity>
//       </Swipeable>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   itemContainer: {
//     width: 300,
//     marginLeft: 20,
//     paddingRight: 10,
//     padding: 5,
//     borderRadius: 10,
//     flexDirection: "column",
//     borderTopWidth: 2,
//     borderTopColor: "#eeeeee",
//   },
//   nameAndPrice_Container: {

//   },
//   dateContainer: {

//   },
//   innerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   purchaseDate: {
//     marginLeft: 5,
//   },
//   itemName: {
//     fontWeight: "bold",
//     color: "dodgerblue",
//   },
//   itemCost: {
//     fontWeight: "bold",
//   },
// });

// export default ListItem;
