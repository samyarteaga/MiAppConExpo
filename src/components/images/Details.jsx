import {
  SafeAreaView,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const Details = ({item,action}) => {
  return (
    <View>
      <View>
        <Image source={{ uri: item.url }} style={{ width: '100%', height: 400 }} />
      </View>
      <View style={styles.contetText}>
        <Text>{item.title}</Text>
      </View>
      <View style={styles.contentBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => action()}>
          <Text style={styles.text}>Atrás</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    contentText:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:15,
    },
    contentBtn:{
        justifyContent:"center",
        alignItems:"center",
        marginTop: 15,
    },
    btn:{
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: Platform.OS === 'ios' ? "gray" : "blue",
        width:"90%",
        height:54,
        marginHorizontal:16,
        borderRadius:10,
    },
    text:{
        color:"#FFFFFF",
        fontSize: 18,
        fontWeight: "500",
    }
});

export default Details;
