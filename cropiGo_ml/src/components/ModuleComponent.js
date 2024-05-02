import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, defaultStyles} from '../styles/styles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';

import cropImage from '../asserts/crop.png';
const ModuleComponent = ({moduleimage, title, desc, link}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(link)}
      style={{elevation: 3}}>
      <View
        style={{
          backgroundColor: colors.color2,
          borderColor: 'black',
          borderWidth: 1,
          width: responsiveWidth(80),
          // height: responsiveHeight(31),
          borderRadius: responsiveWidth(5),
          marginTop: responsiveHeight(3),
          alignItems: 'center',
          paddingTop: responsiveHeight(1.4),
          paddingBottom: responsiveHeight(2.7),
        }}>
        <Image
          source={moduleimage}
          style={{
            //   borderColor: 'black',
            //   borderWidth: 2,
            width: responsiveWidth(23),
            // heigth: responsiveHeight(20).toFixed(2),
          }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: responsiveFontSize(3.3),
            color: colors.color1,
            fontWeight: '600',
          }}>
          {title}
        </Text>
        <Text
          style={{
            paddingTop: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(3),
            fontSize: responsiveFontSize(2.6),
            color: 'black',
            fontWeight: '300',
            textAlign: 'center',
          }}>
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModuleComponent;
