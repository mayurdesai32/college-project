import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownComponent from '../components/DropDownComponent';
import { colors, defaultStyles } from '../styles/style';

import Toast from 'react-native-toast-message';
const { s_a, state_arr } = require('../../assets/data/data.js');

import states from '../../assets/data/states.json';

const CropModule = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState(null);

  const [city, setCity] = useState([{ label: '', value: '' }]);
  const [selectedCity, setSelectedCity] = useState('');
  const [nitrogen, setNitrogen] = useState(null);
  const [phosphorus, setPhosphorus] = useState(null);
  const [pottasium, setPottasium] = useState(null);
  const [ph, setPh] = useState(null);
  const [rainfall, setRainfall] = useState(null);

  const transformCityData = (id) => {
    return s_a[id].split('|').map((state, index) => ({
      label: state.replace(/&/g, 'and'),
      value: state.replace(/&/g, 'and'),
    }));
  };

  function updateCity(selectedState) {
    const transformedCityData = transformCityData(selectedState);
    setCity(transformedCityData);
  }

  useEffect(() => {
    if (selectedState) updateCity(selectedState);
  }, [selectedState]);

  const clickHandler = () => {
    if (
      !nitrogen ||
      !rainfall ||
      !ph ||
      !phosphorus ||
      !pottasium ||
      !selectedCity
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please all detail',
      });
    } else {
      navigation.navigate('CropResult');
    }
  };

  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={{ ...defaultStyles.titleText, fontSize: 25 }}>
        Find out the most suitable crop to grow in your farm
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Nitrogen
          </Text>
          <TextInput
            value={nitrogen}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setNitrogen(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Phosphorus
          </Text>
          <TextInput
            value={phosphorus}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPhosphorus(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Potassium
          </Text>
          <TextInput
            value={pottasium}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPottasium(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            pH Value
          </Text>
          <TextInput
            value={ph}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPh(text)}
            placeholder='Enter the value (Example: 5.5)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Rainfall (in mm)
          </Text>
          <TextInput
            value={rainfall}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setRainfall(text)}
            placeholder='Enter the value'
            keyboardType='numeric'
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
          Select State
        </Text>
        <DropDownComponent
          data={(data = states)}
          value={selectedState}
          setValue={setSelectedState}
          name={'Select State'}
        />
        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
          Select City
        </Text>
        <DropDownComponent
          data={city}
          value={selectedCity}
          setValue={setSelectedCity}
          name={'Select City'}
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.color1,
            paddingVertical: 10,
            marginTop: 10,
          }}
          activeOpacity={0.9}
          onPress={() => clickHandler()}
        >
          <Text
            style={{
              color: colors.color2,
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CropModule;
