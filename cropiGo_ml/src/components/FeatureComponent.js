import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// FontAwesome
const FeatureComponent = ({title, link, logo}) => {
  const navigation = useNavigation();
  let logoTitle = '';
  const iconDetail = {
    color: colors.color2,
    size: responsiveHeight(10),
    backgroundColor: colors.color1,
    styles: {
      alignSelf: 'center',
      height: responsiveHeight(15),
      backgroundColor: colors.color1,
      // width: '100%',
    },
  };

  if (logo === 'model') {
    logoTitle = 'robot-outline';
  } else if (logo === 'history') {
    logoTitle = 'history';
  } else if (logo === 'list') {
    logoTitle = 'format-list-bulleted';
  } else if (logo === 'analytics') {
    logoTitle = 'google-analytics';
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(link)}
      activeOpacity={0.7}
      style={pageStyles.container}>
      {/* <MaterialCommunityIcons.Button
        name="google-analytics"
        size={iconDetail.size}
        backgroundColor={iconDetail.backgroundColor}
        style={iconDetail.styles}
      /> */}

      {/* <Icon /> */}
      <MaterialCommunityIcons.Button
        activeOpacity={0.7}
        onPress={() => navigation.navigate(link)}
        name={logoTitle}
        size={iconDetail.size}
        backgroundColor={iconDetail.backgroundColor}
        style={iconDetail.styles}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
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
