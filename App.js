import { useState } from "react";
import { StyleSheet, View , Text} from "react-native";
import Details from "./src/components/lista/Details";
import Lista from "./src/components/lista/List";
import ListImages from "./src/components/images/ListImages";
import Registro from "./src/components/form/Registro";

export default function App() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        /*<View style={styles.container}>
            {showDetails ? (
                <Details action={setShowDetails} />
            ) : (
                <Lista action={setShowDetails} />
            )}
        </View>*/
        //<ListImages/>
        <Registro/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
});
