import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a key for your AsyncStorage item
const STORAGE_KEY = 'MyListKey';
let MyList;
// Function to save the list to AsyncStorage
const saveList = async list => {
  try {
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving list to AsyncStorage:', error);
  }
};

// Function to retrieve the list from AsyncStorage
const getList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting list from AsyncStorage:', error);
    return null;
  }
};

const mergeList = async () => {
  try {
    const storedList = await getList();
    if (storedList) {
      MyList = storedList;
    }

    const newItem = {id: MyList.length + 1, name: 'New Item'}; // Example object to add
    const updatedList = [...MyList, newItem];
    MyList = updatedList;
    saveList(updatedList);
  } catch (error) {
    console.error('Error getting list from AsyncStorage:', error);
    return null;
  }
};
