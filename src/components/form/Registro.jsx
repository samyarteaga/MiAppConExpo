import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {useState} from 'react';

const Registro = () => {
    const [nombres, setNombre] = useState('');
    const changeNombres = (valor) => {
        setNombre(valor);
        console.log(valor);
    }
    const [documentos, setDocumento] = useState('');
    const changeDocumentos = (valor) => {
        setDocumento(valor);
        console.log(valor);
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View>
          <Text>Registro Usuario</Text>
        </View>
        <View>
          <View style={styles.contentInput}>
            <TextInput placeholder="Nombre completo" 
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
            <TextInput placeholder="Celular" keyboardType="phone-pad" />
          </View>
          <View style={styles.contentInput}>
            <TextInput placeholder="E-mail" keyboardType="email-address" />
          </View>
          <View style={styles.contentBtn}>
            <TouchableOpacity style={styles.btn} onPress={() => action()}>
              <Text style={styles.text}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
});

export default Registro;
