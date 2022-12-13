import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import api, { ALBUMS } from "../../api/api";
import Details from "./Details";

const ListImages = () => {
  const [photos, setPhotos] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [dataItem, setDataItem] = useState({});

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDataItem(item);
          setShowDetails(true);
        }}
      >
        <View style={styes.containerItem}>
          <View style={styes.contentImage}>
            <Image
              source={{ uri: item.url }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styes.contentText}>
            <Text style={styes.text}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const action = () => {
    setShowDetails(false);
  }

  const getImages = async () => {
    const images = await api.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    setPhotos(images);
    console.log(images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <SafeAreaView>
      {showDetails ? (
        <Details item={dataItem} action={action}/>
      ) : (
        <FlatList
          data={photos}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styes = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentImage: {
    marginVertical: 5,
  },
  contentText: {
    paddingLeft: 10,
  },
  text: {
    maxWidth: 200,
  },
});

export default ListImages;
