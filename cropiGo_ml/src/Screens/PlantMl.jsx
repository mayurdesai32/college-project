import { View, Text, Image, TouchableOpacity, StyleSheet, NativeModules } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Empty from '../asserts/empty.jpg'
import Emptyimg from '../asserts/defimg.jpg'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message'

const PlantMl = ({ navigation }) => {


  const [selectImage, setSelectImage] = useState(null)
  // const [gotImg,setGotImg]=useState(false)

  const getImage = async (type) => {
    let result;
    const options = { mediaType: 'photo', selectionLimit: 1, width: 256, height: 256 }
    try {

      if (type === 'camera') {
        result = await launchCamera(options);
      } else {
        result = await launchImageLibrary(options);
      }
      // predict(result.assets[0].uri)
      if (result?.assets[0]?.uri) {
        setSelectImage({ uri: result.assets[0].uri })
      }

    } catch (error) {
      console.log(error)
      return Toast.show({
        type: 'error',
        text1: 'Some thing went wrong',
      });
    }
  }

  const onclickHandler = () => {

    if (!selectImage) {
      Toast.show({
        type: 'error',
        text1: 'please upload the plant leaf image',
      });

    } else {

      navigation.navigate('plantResult', { "file": selectImage })
    }

  }



  return (
    <View style={{ ...defaultStyles.layout, paddingHorizontal: responsiveWidth(4) }}>
      <Text style={{
        ...defaultStyles.titleText,
        fontSize: responsiveFontSize(4),
        fontWeight: '800'
      }}>Select Image To Classify</Text>
      <Text style={{
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(2.8),
        fontWeight: '500', textAlign: 'center'
      }}> Upload a Disease plant leaf image to get to know which disease plant has</Text>

      <Image source={selectImage ? selectImage : Emptyimg} style={{
        width: responsiveWidth(80),
        height: responsiveHeight(30),
        marginVertical: responsiveHeight(4)
      }} />
      <View style={{
        flexDirection: 'row',
        marginBottom: responsiveHeight(4.5),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        <TouchableOpacity style={pageStyles.btnlayout} onPress={() => getImage("camera")}>
          <Text style={{
            color: colors.color2,
            fontSize: responsiveFontSize(2.6)
          }}> CAMERA</Text>
        </TouchableOpacity>
        <Text style={{
          fontSize: responsiveFontSize(3.0),
          fontWeight: '400'
        }}>OR</Text>
        <TouchableOpacity style={pageStyles.btnlayout} onPress={() => getImage("gallery")}>
          <Text style={{
            color: colors.color2,
            fontSize: responsiveFontSize(2.6)
          }}> GALLERY</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{
        ...defaultStyles.btn,
        width: responsiveWidth(91),

        paddingVertical: responsiveHeight(2),
      }} onPress={
        onclickHandler
      }>
        <Text style={{
          color: colors.color2,
          textAlign: "center",
          fontWeight: '500',
          fontSize: responsiveFontSize(2.9)
        }}> PROCESS TO CLASSIFICATION</Text>
      </TouchableOpacity>

    </View>
  )
}


const pageStyles = StyleSheet.create({
  btnlayout: {
    backgroundColor: colors.color1,
    paddingHorizontal: responsiveWidth(5.8),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveHeight(1),
    borderWidth: 0
  }
});
export default PlantMl