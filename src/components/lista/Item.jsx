import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";

const Item = (props) => {
    const click = () => {
        props.action(true);
    };

    return (
        <TouchableOpacity onPress={() => click()} style={styles.container}>
            <View style={styles.section1}>
                <View style={styles.avatar}></View>
                <Text style={styles.name}>{props.item?.name}</Text>
            </View>
            <View style={styles.containerImg}>
                <Image
                    source={require("../../../assets/chevron-right.png")}
                    style={styles.img}
                ></Image>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 70,
    },
    section1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    avatar: {
        width: 60,
        height: 60,
        backgroundColor: colors.gray,
        borderRadius: 40,
    },
    containerImg: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        tintColor: colors.gray2,
        marginRight: 5,
    },
    name: {
        fontSize: 15,
    },
});

export default Item;
