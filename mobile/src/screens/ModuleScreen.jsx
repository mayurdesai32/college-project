import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { useNavigation } from '@react-navigation/native';
const ModuleScreen = () => {
  return (
    <View
      style={{
        ...defaultStyles.container,
        paddingTop: 15,
        backgroundColor: colors.color5,
        flex: 1,
        // paddingBottom: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Text
          style={{
            color: colors.color1,
            fontWeight: '500',
            fontSize: 39,
            textAlign: 'center',
          }}
        >
          Our Services
        </Text>

        <Text
          style={{
            paddingTop: 5,
            // color: colors.color5,
            fontWeight: '300',
            fontSize: 22,
            paddingHorizontal: 15,
            textAlign: 'center',
          }}
        >
          We assist you with these services so that you can raise the calibre of
          your farming.
        </Text>

        <Module
          title={'Plant Disese'}
          desc={
            " With the use of an uploaded photo, this tool assists in identifying the plant's disease."
          }
          funLink={'PlantHome'}
          imgSrc={require('../../assets/plant.png')}
        />
        <Module
          title={'Crop Recommendation'}
          desc={
            ' This tool aids in choosing the ideal crop for your particular soil type.'
          }
          funLink={'CropHome'}
          imgSrc={require('../../assets/crop.png')}
          // navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default ModuleScreen;
const Module = ({ title, desc, funLink, imgSrc }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(funLink)}
      activeOpacity={0.9}
      style={{
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 15,
        borderCurve: 50,
        elevation: 3,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: colors.color2,
        marginBotton: 10,
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={imgSrc} style={{ height: 70, resizeMode: 'contain' }} />
        <Text
          style={{
            paddingTop: 15,
            color: colors.color1,
            fontWeight: '500',
            fontSize: 27,
            paddingHorizontal: 15,
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            paddingTop: 5,
            // color: colors.color5,
            fontWeight: '300',
            fontSize: 20,
            paddingHorizontal: 17,
            textAlign: 'center',
          }}
        >
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
