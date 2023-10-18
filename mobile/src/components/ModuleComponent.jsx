import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const ModuleComponent = ({ title, link }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        overflow: 'hidden',
        flexBasis: '47%',
        height: 210,
        borderRadius: 10,
        marginBottom: 50,
        elevation: 8,
      }}
      onPress={() => navigation.navigate(link)}
    >
      <View>
        <View
          style={{
            width: '100%',
            height: '53%',
            backgroundColor: colors.color1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar.Icon
            icon={'shield-search'}
            size={110}
            style={{ backgroundColor: colors.color1 }}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: '48%',
            backgroundColor: colors.color2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderCurve: 8,
          }}
        >
          <Text
            style={{
              color: colors.color1,
              fontSize: 23,
              fontWeight: '700',
              textAlign: 'center',
              paddingHorizontal: 10,
            }}
          >
            {title}
          </Text>
        </View>
        {/* <Avatar.Icon
          icon={'delete'}
          size={30}
          style={{ backgroundColor: colors.color1 }}
        /> */}
      </View>
    </TouchableOpacity>
  );
};

export default ModuleComponent;
