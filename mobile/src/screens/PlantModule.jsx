import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors, defaultStyles } from '../styles/style';
import Loader from '../components/Loader';

const loader = false;

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {}, []);
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}>Select Image to Classify</Text>
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nostrum maxime!
      </Text>
      <View style={defaultStyles.imgContainer}>
        <Image
          style={defaultStyles.imgStyle}
          source={require('../../assets/defimg.jpg')}
        />
      </View>
      <View style={styles.btnContainerStyle}>
        <TouchableOpacity style={styles.btnStyle} activeOpacity={0.9}>
          <Text style={styles.btnText}>CAMERA</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '400' }}>OR</Text>
        <TouchableOpacity style={styles.btnStyle} activeOpacity={0.9}>
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
          onPress={() => navigation.navigate('result')}
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
export default Home;
