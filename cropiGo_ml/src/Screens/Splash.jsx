import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { colors, defaultStyles } from '../styles/styles';
import homeimage from '../asserts/home.png'

const Splash = ({navigation }) => {
  return (
    <View style={defaultStyles.layout}>
   <Text style={{...pageStyles.text, marginTop:responsiveHeight(7)}}>Advance your</Text>
   <Text style={{...pageStyles.text,color:colors.color1}} >crop cultivation</Text>
   <Text  style={pageStyles.text}>techniques.</Text>
    <Image source={homeimage} style={{height:responsiveHeight(45),width:responsiveWidth(80)}}
     resizeMode='contain'
   />

   <TouchableOpacity style={pageStyles.btn} 
   onPress={()=>navigation.navigate('home')}
   activeOpacity={0.7}>
        <Text style={{color:colors.color2,fontSize:responsiveFontSize(4) ,fontWeight:'600'}}>Get Started</Text>
    </TouchableOpacity>
    </View>
  )
}
 
 const pageStyles = StyleSheet.create({
  btn: {
    backgroundColor:colors.color1,
marginTop:responsiveHeight(2),
    paddingHorizontal:responsiveWidth(11),
    paddingVertical:responsiveHeight(1.1),
    elevation:3,borderRadius:responsiveWidth(2.5),
  },
  text:{
    fontSize:responsiveFontSize(5.5),
    fontWeight:"800",
    color:"black",
    marginTop:responsiveHeight(0.5)
  }
 
});




export default Splash