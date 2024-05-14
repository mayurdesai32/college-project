import {View, Text, Image} from 'react-native';
import React from 'react';
import nonet from '../asserts/nonet.png';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// nonet;
const NoInternent = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={nonet}
        style={{
          width: responsiveWidth(65),
          height: responsiveHeight(30),
          backgroundColor: 'white',
        }}
      />
      <Text
        style={{fontSize: responsiveScreenFontSize(3.2), fontWeight: '700'}}>
        No Internent Connection
      </Text>
    </View>
  );
};

export default NoInternent;
