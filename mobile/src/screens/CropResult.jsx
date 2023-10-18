import { View, Text } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';

const CropResult = () => {
  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={{ ...defaultStyles.titleText }}>Crop Result</Text>
      {/* <Text style={{ ...defaultStyles.titleText }}>
        Application predicted Crop based on given data
      </Text> */}

      <Text
        style={{
          fontSize: 32,
          fontWeight: '700',
          textAlign: 'center',
          paddingHorizontal: 15,
          marginTop: 20,
        }}
      >
        The cultivation of
        <Text style={{ color: colors.color1, fontWeight: '800' }}>
          {' '}
          Orange{' '}
        </Text>
        is best suitable for your land based on the data .
      </Text>

      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            // textAlign: 'center',
            paddingHorizontal: 25,
            flexBasis: 250,
            // borderWidth: 1,
          }}
        >
          Nitrogen -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
          }}
        >
          56
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
            flexBasis: 250,
            // borderWidth: 1,
          }}
        >
          Phosphorus -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            // textAlign: 'center',
            paddingHorizontal: 25,
          }}
        >
          52
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
            flexBasis: 250,
          }}
        >
          Pottasium -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
          }}
        >
          53
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
            flexBasis: 250,
          }}
        >
          Ph Value -
        </Text>

        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
          }}
        >
          9
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
            // flexBasis: 250,
          }}
        >
          Rainfall( in mm ) -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            textAlign: 'center',
            paddingHorizontal: 25,
          }}
        >
          150mm
        </Text>
      </View>

      {/* <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            textAlign: 'center',
            paddingHorizontal: 25,
          }}
        >
          Select City - Nagpur
        </Text>
      </View> */}

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
            flexBasis: 250,
          }}
        >
          humidty( in % ) -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            textAlign: 'center',
            paddingHorizontal: 25,
          }}
        >
          50%
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            flexBasis: 250,
            paddingHorizontal: 25,
          }}
        >
          Temperature -
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            paddingHorizontal: 25,
          }}
        >
          25c
        </Text>
      </View>
    </View>
  );
};

export default CropResult;
