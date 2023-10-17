import { View, Text } from 'react-native';
import React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';
import { colors } from '../styles/style';
import { useNavigation } from '@react-navigation/native';
const RightHeader = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      icon='information-outline'
      size={30}
      iconColor={colors.color2}
      onPress={() => navigation.navigate('about')}
    />
  );
};

export default RightHeader;
