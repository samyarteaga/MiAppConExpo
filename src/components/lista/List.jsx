import Item from "./Item";
import { SafeAreaView, FlatList } from "react-native";

const data = [
    { id: 1, name: "Samuel Arteaga" },
    { id: 2, name: "Samuel Arteaga" },
    { id: 3, name: "Samuel Arteaga" },
    { id: 4, name: "Samuel Arteaga" },
    { id: 5, name: "Samuel Arteaga" },
    { id: 6, name: "Samuel Arteaga" },
    { id: 7, name: "Samuel Arteaga" },
    { id: 8, name: "Samuel Arteaga" },
    { id: 9, name: "Samuel Arteaga" },
    { id: 10, name: "Samuel Arteaga" },
];

const List = (props) => {
    const renderItem = ({ item }) => {
        return <Item item={item} action={props.action} />;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default List;
