import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/styles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ModuleComponent from '../components/ModuleComponent';
import cropImage from '../asserts/crop.png';
import plantImage from '../asserts/plant.png';
const Home = () => {
  return (
    <View
      style={{ ...defaultStyles.layout, paddingHorizontal: responsiveWidth(8) }}>
      <View>
        <Text style={{ ...defaultStyles.titleText, marginTop: responsiveHeight(1.8), }}>Our Services</Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            fontWeight: '400',
            textAlign: 'center',
            marginTop: responsiveHeight(0.5),
          }}>
          We assist you with these services so that you can raise the calibre of
          your farming.
        </Text>
      </View>
      <ModuleComponent
        moduleimage={cropImage}
        link={'cropHome'}
        title={'Crop Recommendation'}
        desc={
          'This tool aids in choosing the ideal crop for your particular soil type.'
        }
      />
      <ModuleComponent
        link={'plantHome'}
        moduleimage={plantImage}
        title={'Plant Disease'}
        desc={
          "With the use of an uploaded photo, this tool assists in identifying the plant's disease. "
        }
      />
    </View>
  );
};

export default Home;
