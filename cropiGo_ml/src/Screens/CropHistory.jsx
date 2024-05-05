import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import SingleCropHistory from '../components/SingleCropHistory';
const CropHistory = () => {
  return (
    <View
      style={{ ...defaultStyles.layout, paddingBottom: responsiveHeight(2.2) }}
    >
      <Text
        style={{
          ...defaultStyles.titleText, fontSize: responsiveFontSize(5),
          paddingBottom: responsiveHeight(0.5)
        }}
      >Previous Recommended  </Text>


      <View style={{
        borderBottomWidth: 0.7,
        borderColor: "black",
        alignSelf: "center",
        marginVertical: responsiveHeight(2),
        width: responsiveWidth(85),

      }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
        <SingleCropHistory index={1} title={"rice"} />
      </ScrollView>

    </View>
  )
}

export default CropHistory