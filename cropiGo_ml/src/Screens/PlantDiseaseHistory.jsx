import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

import SingleCropHistory from '../components/SingleCropHistory';
import StorageContext from '../context/storage/StorageContext';


const PlantDiseaseHistory = () => {

  const {
    plantList,
    loading = true,
    predictPlant,
  } = useContext(StorageContext);
  console.log(plantList)

  return (
    <View
      style={{ ...defaultStyles.layout, paddingBottom: responsiveHeight(2.2) }}
    >
      <Text
        style={{
          ...defaultStyles.titleText, fontSize: responsiveFontSize(5),
          paddingBottom: responsiveHeight(0.5)
        }}
      >Previous predicted Plant Disease </Text>


      <View style={{
        borderBottomWidth: 0.7,
        borderColor: "black",
        alignSelf: "center",
        marginVertical: responsiveHeight(2),
        width: responsiveWidth(85),

      }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {plantList.map((e, i) => (<SingleCropHistory key={i} index={i}
          title={e.label.split("   ")[1]}
          id={e.id}
          type={'plant'}
        />))}


      </ScrollView>

    </View>
  )
}

export default PlantDiseaseHistory