import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropDownComponent = ({
  data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ],
  value,
  setValue,
  name,
}) => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? name : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropDownComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: responsiveHeight(1.4),

    // paddingTop: responsiveHeight(0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    width: responsiveWidth(92),
    height: responsiveHeight(6.5),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingHorizontal: 8,
    backgroundColor: 'white',
    width: responsiveWidth(90),
  },
  icon: {
    marginRight: responsiveHeight(8),
    // backgroundColor: 'red',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: responsiveFontSize(2.5),
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(2.5),
    paddingHorizontal: responsiveWidth(3),
  },
  selectedTextStyle: {
    fontSize: responsiveFontSize(2.5),
    paddingHorizontal: responsiveWidth(3),
  },
  iconStyle: {
    width: responsiveHeight(4),
    height: responsiveWidth(4),
  },
  inputSearchStyle: {
    height: responsiveHeight(5),
    fontSize: responsiveFontSize(2.2),

    // backgroundColor: 'red',
  },
});
