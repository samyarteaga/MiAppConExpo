import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Button,
} from "react-native";
import { useState } from "react";
import api, { USER } from "../../api/api";
import { storeData, getData } from "../../utils/utils";

const Registro = () => {
  const [nombres, setNombre] = useState("");
  const changeNombres = (valor) => {
    setNombre(valor);
    console.log(valor);
  };
  const [documentos, setDocumento] = useState("");
  const changeDocumentos = (valor) => {
    setDocumento(valor);
    console.log(valor);
  };
  const [celular, setCelular] = useState("");
  const changeCelular = (valor) => {
    setCelular(valor);
    console.log(valor);
  };
  const [email, setEmail] = useState("");
  const changeEmail = (valor) => {
    setEmail(valor);
    console.log(valor);
  };
  const [loading, setLoading] = useState(false);

  const guardar = async () => {
    if (nombres && documentos && celular && email) {
      setLoading(true);
      const data = {
        nombres,
        documentos,
        celular,
        email,
      };
      const res = await api.post(USER, data);
      console.log(res);
      setLoading(false);
      await storeData('user',res.user);
      setNombre("");
      setDocumento("");
      setCelular("");
      setEmail("");
      Alert.alert("Éxito", "Se guardó la información");
    } else {
      Alert.alert("Error", "Debe llenar todos los campos");
    }
  };

const  obtenerData = async() => {
  const data = await getData('user');
  console.log(data);
  setNombre(data.nombres);
  setDocumento(data.documentos);
  setCelular(data.celular);
  setEmail(data.email);
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text>Registro Usuario</Text>
        </View>
        <View>
          <View style={styles.contentInput}>
            <TextInput
              placeholder="Nombre completo"
              onChangeText={(value) => changeNombres(value)}
              value={nombres}
            />
          </View>
          <View style={styles.contentInput}>
            <TextInput
              placeholder="Documento de identidad"
              keyboardType="number-pad"
              onChangeText={(value) => changeDocumentos(value)}
              value={documentos}
            />
          </View>
          <View style={styles.contentInput}>
            <TextInput
              placeholder="Celular"
              keyboardType="phone-pad"
              onChangeText={(value) => changeCelular(value)}
              value={celular}
            />
          </View>
          <View style={styles.contentInput}>
            <TextInput
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={(value) => changeEmail(value)}
              value={email}
            />
          </View>
          <View style={styles.contentBtn}>
            <TouchableOpacity style={styles.btn} onPress={() => guardar()}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>Guardar</Text>
                {loading && <ActivityIndicator color="#FFFFFF" />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Button title="Obtener datos" onPress={() => obtenerData()}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 60,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentInput: {
    width: 350,
    height: 30,
    borderColor: "#123123",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 5,
    marginBottom: 5,
  },
  contentBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? "gray" : "blue",
    width: "90%",
    height: 54,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    marginRight: 5,
  },
});

export default Registro;
