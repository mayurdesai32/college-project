import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';
const FeatureComponent = ({title, link}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link)}
      activeOpacity={0.7}
      style={pageStyles.container}>
      <View
        style={{
          // width:responsiveWidth(43),
          height: responsiveHeight(15),
          backgroundColor: colors.color1,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          //   paddingVertical:responsiveHeight(1),
          height: responsiveHeight(13),
          backgroundColor: colors.color2,
        }}>
        <Text style={pageStyles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const pageStyles = StyleSheet.create({
  container: {
    elevation: 3,
    overflow: 'hidden',
    // height:responsiveHeight(30),
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(42),
    marginTop: responsiveHeight(5),
  },
  textStyle: {
    color: colors.color1,
    paddingHorizontal: responsiveWidth(2),
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    textAlign: 'center',

    //    paddingVertical:responsiveHeight(1)
  },
});

export default FeatureComponent;
