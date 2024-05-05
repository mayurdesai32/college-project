import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/styles';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SingleCropHistory = ({index, title, link}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: colors.color1,
        flexDirection: 'row',
        borderRadius: responsiveWidth(4.2),
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveWidth(90),
        // height: responsiveHeight(9)
        paddingVertical: responsiveHeight(1),
        marginBottom: responsiveHeight(1.5),
      }}
      onPress={() => console.log('complent')}>
      <Text
        style={{
          fontSize: responsiveFontSize(4),
          fontWeight: '500',
          color: 'white',
          paddingLeft: responsiveWidth(5),
          textTransform: 'capitalize',
        }}>
        {index}
        {'      '}
        {title}
      </Text>

      <Icon.Button
        name="delete-forever"
        backgroundColor={colors.color1}
        size={38}
        onPress={() => {
          // navigation.navigate('Abouts');
          console.log('link');
        }}
        color={colors.color5}
        style={{marginRight: responsiveWidth(4)}}
      />
    </TouchableOpacity>
  );
};

export default SingleCropHistory;
