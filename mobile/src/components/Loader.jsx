import { View, Text } from 'react-native';
import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { colors } from '../styles/style';
const Loader = () => {
  return (
    <ActivityIndicator animating={true} color={colors.color1} size={100} />
  );
};

export default Loader;
