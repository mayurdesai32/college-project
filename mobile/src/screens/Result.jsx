import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors, defaultStyles } from '../styles/style';
import Loader from '../components/Loader';
import { Button } from 'react-native-paper';

const loader = false;

const Result = () => {
  const navigation = useNavigation();
  useEffect(() => {}, []);
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}>Classify Image...</Text>
      <Text style={styles.descText}>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nostrum maxime!
      </Text>
      <View style={defaultStyles.imgContainer}>
        <Image
          style={defaultStyles.imgStyle}
          source={require('../../assets/defimg.jpg')}
        />

        <View style={defaultStyles.result}>
          {/* <Image
            style={styles.imgStyle}
            source={require('../../assets/check.svg')}
          /> */}
        </View>
      </View>
      <View style={styles.btnContainerStyle}>
        <TouchableOpacity
          style={styles.btnStyle}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('PlantResult')}
        >
          <Text style={styles.btnText}>SEE RESULTS</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <TouchableOpacity
          style={{ ...styles.btnProceedStyle, opacity: loader ? 0.6 : 1 }}
          disabled={loader ? true : false}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('result')}
        >
          <Text style={styles.btnProceedText}>SEE RESULTS</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    color: colors.color3,
    fontSize: 33,
    fontWeight: '800',
    paddingTop: 20,
    paddingBottom: 20,
  },
  descText: {
    fontSize: 18,
    fontWeight: '400',
    // paddingBottom: 40,
  },

  result: {
    position: 'absolute',
    width: 150,
    height: 100,
    backgroundColor: colors.color1,
  },
  btnContainerStyle: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  btnProceedStyle: {
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: colors.color1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%',
  },
  btnProceedText: { color: colors.color2, fontSize: 21, fontWeight: '600' },
});
export default Result;
