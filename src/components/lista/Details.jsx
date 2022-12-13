import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    TouchableHighlight,
} from "react-native";
import { useState } from "react";
import colors from "../../utils/colors";

const Details = (props) => {
    const [loading, setLoading] = useState(false);

    const send = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Alert.alert("Bien hecho!", "Dinero enviado");
        }, 3000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.containerTitle}>
                    <TouchableHighlight
                        onPress={() => {
                            props.action(false);
                        }}
                        activeOpacity={0.8}
                        underlayColor={colors.gray}
                    >
                        <Image
                            source={require("../../../assets/chevron-left.png")}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableHighlight>
                    <View>
                        <Text style={styles.title}>Enviar dinero a</Text>
                    </View>
                    <View style={{ width: 40 }} />
                </View>
                <View style={styles.container2}>
                    <View style={styles.containerInfo}>
                        <View style={styles.avatar} />
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.name}>Miguel Arevalo</Text>
                            <Text style={styles.cardNumber}>
                                2345 **** **** 3456
                            </Text>
                        </View>
                    </View>
                    <View style={styles.amount}>
                        <Text style={styles.value}>$ 320.00</Text>
                        <Text style={styles.fee}>No fee</Text>
                    </View>
                    <Text style={styles.selectAccount}>
                        Seleciona tu cuenta
                    </Text>
                </View>
                <View style={styles.containerAccounts}>
                    <View>
                        <View style={styles.containerAccount}>
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <View style={styles.typeCard} />
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={styles.accountNumber}>
                                        **** 3456
                                    </Text>
                                    <Text style={styles.balance}>
                                        Balance: $ 530.00
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    source={require("../../../assets/chevron-down.png")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.bntSend} onPress={send}>
                    {!loading && <Text style={styles.textSend}>Enviar</Text>}
                    {loading && (
                        <ActivityIndicator size='large' color={colors.white} />
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    container2: {
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    containerInfo: {
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 64,
        backgroundColor: colors.gray,
    },
    containerAccounts: {
        flexDirection: "column",
        marginBottom: 20,
    },
    containerAccount: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        borderRadius: 12,
        height: 80,
        paddingHorizontal: 18,
        marginHorizontal: 10,

        //Sombra
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    typeCard: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: colors.gray,
    },
    bntSend: {
        flexDirection: "row",
        backgroundColor: colors.purple,
        height: 56,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    textSend: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 36,
        textAlign: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
    },
    cardNumber: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: colors.gray2,
    },
    amount: {
        alignItems: "center",
        marginTop: 30,
    },
    value: {
        fontSize: 32,
        fontWeight: "600",
        lineHeight: 48,
    },
    fee: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        color: colors.gray2,
    },
    selectAccount: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        color: colors.gray2,
        marginTop: 20,
    },
    accountNumber: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
    },
    balance: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        color: colors.gray2,
    },
});

export default Details;
