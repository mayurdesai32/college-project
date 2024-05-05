import {View, Text} from 'react-native';
import React from 'react';
// import {IconButton, MD3Colors} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../styles/styles';
const RightHeader = () => {
  const navigation = useNavigation();
  return (
    <Icon.Button
      name="alert-circle"
      backgroundColor={colors.color1}
      size={30}
      onPress={() => {
        navigation.navigate('Abouts');
      }}
      color={colors.color2}
    />

    // <IconButton
    //   icon="information-outline"
    //   size={30}
    //   iconColor={colors.color2}
    //   onPress={() => navigation.navigate('about')}
    // />
  );
};

export default RightHeader;
