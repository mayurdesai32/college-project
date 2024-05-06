import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../styles/styles';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import StorageContext from '../context/storage/StorageContext';
import Toast from 'react-native-toast-message';
const SingleCropHistory = ({index, title, link, id, type}) => {
  const {
    cropList,
    plantList,
    loading = true,
    predictCrop,
    removeSingleCrop,
    removeSinglePlant,
  } = useContext(StorageContext);
  const navigation = useNavigation();

  const onclickhandler = () => {
    if ((type = 'plant')) {
      // navigation.navigate('plantResult', {
      // });
      // Toast.show({
      //   type: 'sucess',
      //   text1: 'Sorry feature not available',
      // });
    } else {
      navigation.navigate('CropResult', {
        selectedCrop: true,
        selectedCropValue: index,
      });
    }
  };

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
      onPress={() => onclickhandler()}>
      <Text
        style={{
          fontSize: responsiveFontSize(4),
          fontWeight: '500',
          color: 'white',
          paddingLeft: responsiveWidth(5),
          textTransform: 'capitalize',
        }}>
        {index + 1}
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
          type === 'plant' ? removeSinglePlant(id) : removeSingleCrop(id);
        }}
        color={colors.color5}
        style={{marginRight: responsiveWidth(4)}}
      />
    </TouchableOpacity>
  );
};

export default SingleCropHistory;
