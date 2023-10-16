import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { Avatar } from 'react-native-paper';
import ModuleComponent from '../components/ModuleComponent';

const PlantHome = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}>Plant Disease Prediction !</Text>
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
          title={' Predict New Plant Disease'}
          link={'PlantModule'}
          key={0}
        />
        <ModuleComponent
          title={'View Prediction History'}
          link={'PlantModule'}
          key={1}
        />
        <ModuleComponent
          title={'View Supported Spicies-Diseases'}
          key={2}
          link={'SupportedDisease'}
        />
        <ModuleComponent
          title={'View All  Prediction Analytics'}
          key={3}
          link={'PlantModule'}
        />
      </View>
    </View>
  );
};

export default PlantHome;
