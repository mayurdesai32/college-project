import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AccordingComponent from '../components/AccordingComponent'
import { PlantLabel, plant } from '../asserts/label'
import plantDetail from '../asserts/data.json'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

const SupportPlantDisease = () => {

  return (
    <View style={[defaultStyles.layout, { paddingHorizontal: responsiveWidth(2) }]}>

      <Text style={{
        ...defaultStyles.titleText, marginBottom: responsiveHeight(3),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(4.5),
      }}>All Supported Crop</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {plantDetail.map((e, i) => (
          <AccordingComponent key={i} title={e.type} data={
            e.spies.map((item) => {
              return {
                title: item.disease,
                detail: item.detail
                // data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
              }
            })
          }
            link={"support"}
          />
        ))}

      </ScrollView>
    </View>
  )
}

export default SupportPlantDisease