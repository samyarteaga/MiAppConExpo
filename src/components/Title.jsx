import { View, Text } from "react-native";

const Title = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};

const Subtitle = () => {
    return (
        <View>
            <Text>Este es mi subtítulo</Text>
        </View>
    );
};

export { Title, Subtitle };
