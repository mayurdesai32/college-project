import {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import StorageContext from './StorageContext';
import StorageReducer from './StorageReducer';
import {
  GET_CROP_LIST,
  SET_LOADING,
  GET_SINGLE_CROP,
  CLEAR_SINGLE_CROP,
  CLEAR_ALL_CROP,
  ADD_CROP,
  GET_PLANT_LIST,
  ADD_PLANT,
  GET_SINGLE_PLANT,
  SET_CONNECTION,
  CLEAR_SINGLE_PLANT,
  CLEAR_ALL_PLANT,
  BASE_URL,
} from '../Constant';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import {PlantLabel} from '../../asserts/label';

const StorageState = props => {
  const {CropRecommendModule} = NativeModules;

  const initialState = {
    cropList: [],
    plantList: [],
    loading: false,
    connection: false,
  };
  const [state, dispatch] = useReducer(StorageReducer, initialState);
  // getting data
  const getData = async () => {
    try {
      let CropList = [];
      let crop = JSON.parse(await AsyncStorage.getItem('croplist2'));
      let plant = JSON.parse(await AsyncStorage.getItem('plantlist'));
      if (crop) {
        console.log(crop);
        CropList = crop;
        dispatch({
          type: GET_CROP_LIST,
          payload: CropList,
        });
      }

      if (plant) {
        plantList = plant;
        dispatch({
          type: GET_PLANT_LIST,
          payload: plantList,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getConnection = status => {
    dispatch({
      type: SET_CONNECTION,
      payload: status,
    });
  };

  const predictCrop = async params => {
    dispatch({type: SET_LOADING});
    try {
      const url = `${BASE_URL}:8000/v2/api/crop`;
      console.log(url);
      console.log('params', params);
      const response = await axios.post(url, params);

      // const response = await axios.get(`${BASE_URL}:8000/`);
      console.log(response);
      // let Humidty = '55';
      // let Temperature = '55';
      const id = new Date().getTime().toString();
      console.log(typeof id);
      dispatch({
        type: ADD_CROP,
        payload: {
          ...params,
          crop: response.data.message,
          Humidity: response.data.Humidity,
          Temperature: response.data.Temperature.toFixed(0),
          id: id,
        },
      });

      console.log('typeof id');

      console.log(response.data);
    } catch (error) {
      console.error('error');
      console.error(error);

      return Toast.show({
        type: 'error',
        text1: 'server side issue',
      });
    }
  };

  const removeSingleCrop = crop => {
    dispatch({type: SET_LOADING});
    dispatch({
      type: CLEAR_SINGLE_CROP,
      payload: crop,
    });
  };

  const predictPlant = async params => {
    dispatch({type: SET_LOADING});

    try {
      console.log('hello world');
      let data1 = await CropRecommendModule.classifyImage(params);
      data1 = JSON.parse(data1);
      console.log(data1);
      console.log('data1');
      let label = PlantLabel[data1.maxIdx];
      let accurracy = (data1?.id * 100).toFixed(2);
      let id = new Date().getTime().toString();
      dispatch({
        type: ADD_PLANT,
        payload: {
          label,
          accurracy,
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      return Toast.show({
        type: 'error',
        text1: 'server side issue',
      });
    }
  };

  const removeSinglePlant = id => {
    dispatch({type: SET_LOADING});
    dispatch({
      type: CLEAR_SINGLE_PLANT,
      payload: id,
    });
  };
  return (
    <StorageContext.Provider
      value={{
        cropList: state.cropList,
        plantList: state.plantList,
        loading: state.loading,
        connection: state.connection,
        predictCrop,
        removeSingleCrop,
        predictPlant,
        removeSinglePlant,
        getConnection,
      }}>
      {props.children}
    </StorageContext.Provider>
  );
};

export default StorageState;
