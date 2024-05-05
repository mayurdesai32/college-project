import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors, defaultStyles} from '../styles/styles';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Toast from 'react-native-toast-message';

const TextInputComponent = ({
  label,
  placeholder,
  onChangeText,
  value,
  maxLimit = 225,
}) => {
  const onClickHandler = value => {
    if (maxLimit >= value) {
      onChangeText(value);
    } else {
      Toast.show({
        type: 'error',
        text1: `${label} value cant be more then ${maxLimit}`,
      });
    }
  };
  return (
    <View style={defaultStyles.TextInputContainer}>
      <Text style={defaultStyles.TextLabel}>{label} :</Text>
      <TextInput
        style={defaultStyles.TextInput}
        value={value}
        onChangeText={e => onClickHandler(e)}
        placeholder={placeholder}
        keyboardType="number-pad"
        inputMode="decimal"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInputComponent;
