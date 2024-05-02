import { View, Text } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from 'react-native-responsive-dimensions'
import FeatureComponent from '../components/FeatureComponent'

const PlantHome = () => {
  return (
   <View style={defaultStyles.layout }>
      <Text style={{...defaultStyles.titleText,
      marginBottom:responsiveHeight(3),
             marginTop: responsiveHeight(3), 
                 fontSize: responsiveFontSize(4.5),
                 fontWeight:'800'}}> Plant Disease Prediction !</Text>
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
        <FeatureComponent title={"Predict New Plant Disease"} 
        link={"plantMl"}/>
          <FeatureComponent title={"View Prediction History "}
           link={"plantResult"}/>
           <FeatureComponent title={"View Supported spi ces Diseases"}
            link={"plantResult"}
           />
          <FeatureComponent title={"View All Prediction Analytics"}
           link={"plantResult"}/>
    </View>
    </View>
  )
}

export default PlantHome