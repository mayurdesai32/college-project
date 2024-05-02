import { View, Text } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from 'react-native-responsive-dimensions'
import FeatureComponent from '../components/FeatureComponent'
 
const CropHome = () => {
  return (
    <View style={defaultStyles.layout }>
      <Text style={{...defaultStyles.titleText,
      marginBottom:responsiveHeight(3),
             marginTop: responsiveHeight(3), 
                 fontSize: responsiveFontSize(4.0),
                 fontWeight:'800'}}> Crop Recommendation System!</Text>
    <View style={{borderBottomWidth:0.7,
        borderColor:"black",
        // Width:responsiveWidth(0)
        alignSelf:"center",
        width:responsiveWidth(85)
        }}>

    </View>
    
    <View style={{
        //   marginTop:responsiveHeight(3),
        flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingHorizontal:responsiveWidth(5)}}>
        <FeatureComponent title={"Recommend Crop"} link={"recommendCropMl"}/>
          <FeatureComponent title={"View Recommend Crop History "}  link={"recommendCropMl"}/>
           <FeatureComponent title={"View Supported Crop"}  link={"SupportedCrop"}/>
          <FeatureComponent title={"View All Recommend Analytics"}  link={"recommendCropMl"}/>
    </View>
    </View>
  )
}

export default CropHome