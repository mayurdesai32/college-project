import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import TextInputComponent from '../components/TextInputComponent'
import DropDownComponent from '../components/DropDownComponent'

import states from '../asserts/data/states.json';
import Toast from 'react-native-toast-message'
const { s_a, state_arr } = require('../asserts/data/data');

const RecommendCropMl = ({ navigation }) => {
  // console.log("Rainfall",Rainfall)
  const [selectedState, setSelectedState] = useState(null);

  const [Nitrogen, setNitrogen] = useState();
  const [Phosphorous, setPhosphorous] = useState();
  const [Potassium, setPotassium] = useState();
  const [pH, setpH] = useState();
  const [Rainfall, setRainfall] = useState();
  const [city, setCity] = useState([{ label: '', value: '' }]);
  const [selectedCity, setSelectedCity] = useState('');
  const croprecomFun = async () => {


    if (
      !Nitrogen ||
      !Rainfall ||
      !pH ||
      !Phosphorous ||
      !Potassium ||
      !selectedCity
      // false
    ) {

      return Toast.show({
        type: 'error',
        text1: 'Please fill all detail',
      });
      // console.log('Please fill all the detail')
    }

    else {
      navigation.navigate('CropResult', {
        "Nitrogen": Nitrogen,
        "Phosphorus": Phosphorous,
        "Potassium": Potassium,
        "phValue": pH,
        "Rainfall": Rainfall,
        "city": selectedCity.trim()
      });
    }

  }






  const transformCityData = (id) => {
    return s_a[id].split('|').map((state, index) => ({
      label: state.replace(/&/g, 'and'),
      value: state.replace(/&/g, 'and'),
    }));
  };

  function updateCity(selectedState) {
    const transformedCityData = transformCityData(selectedState);
    setCity(transformedCityData);
    setSelectedCity("")
  }

  useEffect(() => {
    if (selectedState) updateCity(selectedState);
  }, [selectedState]);








  // const[value,setValue]=useState('')
  return (
    <View style={{
      ...defaultStyles.layout,
      paddingHorizontal: responsiveWidth(2.7),
      paddingBottom: responsiveHeight(2),
      alignItems: 'center',
    }}>
      <Text style={{
        ...defaultStyles.titleText,
        marginLeft: "auto",
        marginBottom: responsiveHeight(3.3),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(3.2),
        lineHeight: responsiveFontSize(4.3),
        textAlign: "center",
        fontWeight: '800'
      }}> Find out the most suitable Crop to grow in your farm</Text>

      <ScrollView showsVerticalScrollIndicator={false}
        style={{ width: "100%", alignContent: 'center', }}>
        <TextInputComponent label={'Nitrogen'}
          onChangeText={setNitrogen}
          value={Nitrogen}
          placeholder={"Enter the value (Example:50)"} />


        <TextInputComponent label={'Phosphorous'}
          onChangeText={setPhosphorous}
          value={Phosphorous}

          placeholder={"Enter the value (Example:50)"} />


        <TextInputComponent label={'Potassium'}
          onChangeText={setPotassium}
          value={Potassium}
          placeholder={"Enter the value (Example:50)"} />


        <TextInputComponent label={'pH Value'}
          onChangeText={setpH}
          value={pH}
          maxLimit={10}
          placeholder={"Enter the value (Example:5.5)"} />


        <TextInputComponent label={'Rainfall (in mm)'}
          onChangeText={setRainfall}
          value={Rainfall}
          placeholder={"Enter the value "} />


        <Text style={{
          fontSize: responsiveFontSize(2.7),
          marginBottom: responsiveHeight(-1),
          color: 'black',
          fontWeight: '500',
          paddingLeft: responsiveWidth(2.8),
        }}>Select state :</Text>


        <DropDownComponent
          data={(data = states)}
          value={selectedState}
          setValue={setSelectedState}
          name={'Select State'} />
        <Text style={{
          fontSize: responsiveFontSize(2.7),
          marginBottom: responsiveHeight(-1),
          color: 'black',
          fontWeight: '500',
          paddingLeft: responsiveWidth(2.8),
        }}>
          Select City :</Text>
        <DropDownComponent
          data={city}
          value={selectedCity}
          setValue={setSelectedCity}
          name={'Select City'} />

        <TouchableOpacity style={defaultStyles.btn} activeOpacity={0.7} onPress={() => { croprecomFun() }}>
          <Text style={{
            color: colors.color2, fontSize: responsiveFontSize(3),
            textAlign: "center",
            fontWeight: '600'
          }}>Predicte Crop</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  )
}





export default RecommendCropMl