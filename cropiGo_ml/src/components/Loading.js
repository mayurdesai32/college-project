import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import loader from '../asserts/loader.png';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {colors} from '../styles/styles';

const Loading = () => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    rotate.start();

    return () => {
      rotate.stop();
    };
  }, [rotation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.color5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        source={loader}
        style={[
          // style,

          {transform: [{rotate: spin}]},
        ]}
      />
      <Text
        style={{
          color: colors.color1,
          fontSize: responsiveFontSize(3),
          marginTop: responsiveHeight(2),
        }}>
        Loading please wait
      </Text>
    </View>
  );
};

export default Loading;
export const styles = StyleSheet.create({});
