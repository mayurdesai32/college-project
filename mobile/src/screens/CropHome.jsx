import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { Avatar } from 'react-native-paper';
import ModuleComponent from '../components/ModuleComponent';

const CropHome = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}>Crop Recommendation system !</Text>
      <View
        style={{
          marginTop: 2,
          marginHorizontal: 10,
          borderBottomWidth: 0.2,
        }}
      ></View>
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <ModuleComponent
          title={'Recommend Crop '}
          link={'CropModule'}
          key={0}
        />
        <ModuleComponent
          title={'View Recommend Crop History'}
          link={'CropHistory'}
          key={1}
        />
        <ModuleComponent
          title={'View Supported Crop'}
          key={2}
          link={'SupportedCrop'}
        />
        <ModuleComponent
          title={'View All  Recommendation Analytics'}
          key={3}
          link={'PlantModule'}
        />
      </View>
    </View>
  );
};

export default CropHome;
