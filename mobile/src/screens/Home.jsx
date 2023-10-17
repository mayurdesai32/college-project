import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';

const Home = ({ navigation, route }) => {
  return (
    <View
      style={{
        ...defaultStyles.container,
        paddingTop: 50,
        backgroundColor: colors.color5,
      }}
    >
      {/* <Text style={{ ...defaultStyles.titleText }}>CropiGo</Text> */}
      <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: '600' }}>
        Advance your
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: '600',
          color: colors.color1,
        }}
      >
        crop cultivation
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: '600' }}>
        techniques.
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Image source={require('../../assets/home.png')} />
      </View>
      <View
        style={{
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.color1,
            borderRadius: 10,
            width: 300,
            paddingVertical: 10,
          }}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ModuleScreen')}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '600',
              color: colors.color2,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
