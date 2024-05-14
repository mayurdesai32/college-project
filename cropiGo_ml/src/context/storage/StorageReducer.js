import {
  GET_CROP_LIST,
  ADD_CROP,
  CLEAR_SINGLE_CROP,
  CLEAR_ALL_CROP,
  SET_LOADING,
  GET_PLANT_LIST,
  ADD_PLANT,
  GET_SINGLE_PLANT,
  CLEAR_SINGLE_PLANT,
  CLEAR_ALL_PLANT,
  SET_CONNECTION,
} from '../Constant';

import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageReducer = (state, action) => {
  switch (action.type) {
    case SET_CONNECTION:
      // console.log('payload', action.payload);
      return {
        ...state,
        connection: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_CROP_LIST:
      return {
        ...state,
        cropList: action.payload,
        loading: false,
      };

    case ADD_CROP:
      let List = [action.payload, ...state.cropList];
      (async () => {
        await AsyncStorage.setItem('croplist2', JSON.stringify(List));
      })();

      return {
        ...state,
        cropList: List,
        loading: false,
      };

    case CLEAR_SINGLE_CROP:
      let List1 = state.cropList.filter(e => e.id != action.payload);
      (async () => {
        await AsyncStorage.setItem('croplist2', JSON.stringify(List1));
      })();

      return {
        ...state,
        cropList: List1,
        loading: false,
      };

    case GET_PLANT_LIST:
      return {
        ...state,
        plantList: action.payload,
        loading: false,
      };

    case ADD_PLANT:
      let List2 = [action.payload, ...state.plantList];
      (async () => {
        await AsyncStorage.setItem('plantlist', JSON.stringify(List2));
      })();
      return {
        ...state,
        plantList: List2,
        loading: false,
      };

    // case CLEAR_ALL_PLANT:
    //   return {
    //     ...state,
    //     plantList: [],
    //     loading: false,
    //   };

    case CLEAR_SINGLE_PLANT:
      let List3 = state.plantList.filter(e => e.id != action.payload);
      (async () => {
        await AsyncStorage.setItem('plantlist', JSON.stringify(List3));
      })();
      return {
        ...state,
        plantList: List3,
        loading: false,
      };

    default:
      return state;
  }
};
export default StorageReducer;
