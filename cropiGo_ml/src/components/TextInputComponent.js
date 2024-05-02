import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors, defaultStyles} from '../styles/styles';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const TextInputComponent = ({label, placeholder, onChangeText, value}) => {
  return (
    <View style={defaultStyles.TextInputContainer}>
      <Text style={defaultStyles.TextLabel}>{label} :</Text>
      <TextInput
        style={defaultStyles.TextInput}
        value={value}
        onChangeText={e => onChangeText(e)}
        placeholder={placeholder}
        keyboardType="number-pad"
        inputMode="decimal"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInputComponent;
