import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { colors, defaultStyles } from '../styles/style';

import ImageGalleryComponent from '../components/ImageGalleryComponent';
import Toast from 'react-native-toast-message';
import { storeData } from '../components/dataStorage';
const loader = false;
let data;
const PlantModule = ({ navigation, route }) => {
  let imgsrc = require('../../assets/defimg.jpg');
  const [gotImg, setGotImg] = useState(false);
  const [imgSrc, setImgSrc] = useState(imgsrc);

  useEffect(() => {
    if (route.params?.imgsrc) {
      setImgSrc({ uri: route.params?.imgsrc });

      setGotImg(true);
    }
  }, [route.params, sumitHandler]);
  const clickHandler = async () => {
    try {
      const image = await ImageGalleryComponent();
      if (image) {
        setGotImg(true);
        setImgSrc({ uri: image });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sumitHandler = async () => {
    if (gotImg) {
      // data = await axios.post('https:www.google.com/', { plantImg: imgSrc });
      // storeData(data);
      if (data) {
        return navigation.navigate('result', {
          title: 'Tomato Late Bright',
          confident: 55,
          dateTime: '25 jan 2023 time 10.05',
        });
      }
    } else {
      return Toast.show({
        type: 'error',
        text1: 'Please add photo',
      });
    }
  };
  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={defaultStyles.titleText}>Select Image to Classify</Text>
      <Text style={styles.descText}>
        Upload a disease plant leaf image to get to know which disease plant has
      </Text>
      <View style={{ ...defaultStyles.imgContainer, marginVertical: 30 }}>
        <Image style={defaultStyles.imgStyle} source={imgSrc} />
      </View>
      <View style={styles.btnContainerStyle}>
        <TouchableOpacity
          style={styles.btnStyle}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CameraComponent')}
        >
          <Text style={styles.btnText}>CAMERA</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '400' }}>OR</Text>
        <TouchableOpacity
          style={styles.btnStyle}
          activeOpacity={0.9}
          onPress={clickHandler}
        >
          <Text style={styles.btnText}>GALLERY</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            ...defaultStyles.btnProceedStyle,
            opacity: loader ? 0.6 : 1,
          }}
          disabled={loader ? true : false}
          activeOpacity={0.9}
          onPress={() => sumitHandler()}
        >
          <Text style={defaultStyles.btnProceedText}>
            PROCEED TO CLASSIFICATION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  descText: {
    fontSize: 18,
    fontWeight: '400',
    // paddingBottom: 40,
  },

  btnContainerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnStyle: {
    borderRadius: 7,
    backgroundColor: colors.color1,
    flexBasis: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: { color: colors.color2, fontSize: 20, fontWeight: '600' },
});
export default PlantModule;
