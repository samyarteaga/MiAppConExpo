import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async(key, value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key,jsonValue)
    }catch (e){
        //Saving error
        console.log(e);
    }
}

const getData = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }catch(e){
        //error reading value
        console.log(e);
    }
}

export {storeData, getData};