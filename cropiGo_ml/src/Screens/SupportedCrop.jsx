import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from 'react-native-responsive-dimensions'


const SupportedCrop = () => {
    const croplist=["APPLE","CHERRY",'CORN','GRAPE','PEACH','PEPPER BELL','POTATO','STRAWBERRY',"APPLE1","CHERRY1",'CORN1','GRAPE1','PEACH1','PEPPER BELL1',]
  return (
    <View style={defaultStyles.layout}>
    <Text style={{...defaultStyles.titleText,marginBottom:responsiveHeight(3),
             marginTop: responsiveHeight(3), 
                 fontSize: responsiveFontSize(4.5),}}>All Supported Crop</Text>
    <FlatList 
     data={croplist} 
    renderItem={({item})=>(
        <View style={{   
            backgroundColor:colors.color1,
            width:responsiveWidth(90),
            height:70,
            justifyContent:'center',
            alignItems:'center',
           
    marginBottom:responsiveHeight(1)}}>
    <Text style={{fontSize:responsiveFontSize(3.5),
fontWeight:'500',
    color:colors.color2,
 }}>
        {item}</Text></View>)} 
    keyExtractor={item=> item}/>
    </View>
  )
}

export default SupportedCrop