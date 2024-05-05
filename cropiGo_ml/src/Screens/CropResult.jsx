import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveWidth,responsiveHeight,responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Loading from '../components/Loading'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CropResult = ({ route: { params },navigation }) => {

// let loading=true

const [loading,setLoading]=useState(true)

const [Result,setResult]=useState('')


    console.log("params",params)
 
const predict=async ()=>{
        try {
    const BASE_URL='http://192.168.45.223'
    const url=`${BASE_URL}:8000/v2/api/crop`
const response = await axios.post(url,params)
  setLoading(false)
    setResult(response.data.message)
     } catch (error) {
        console.error("error");
    console.error(error);


      return Toast.show({
        type: 'error',
        text1: 'server side issue',
      });



  }

    }

let Humidty="55"
let Temperature="55"
useEffect(()=>{

if (
      !params.Nitrogen ||
      !params.Rainfall ||
      !params.phValue ||
      !params.Phosphorus ||
      !params.Potassium ||
      !params.city
      
    ) {
      console.log("resend")
       navigation.navigate('recommendCropMl')
    }
    else(
predict()

    )


},[params])

let data=[
{label:'Nitrogen',value:params.Nitrogen},
{label:'Phosphorous',value: params.Phosphorus},
{label:'Potassium',value:params.phValue},
{label:'pH Value',value:params.phValue},
{label:'Rainfall (in mm)',value:`${params.Rainfall} mm`},
{label:'Humidty (in %)',value:`${Humidty}%`},
{label:'Temperature (in *c)',value:`${Temperature}c`},

]


  return (
    <>
   { loading?<><Loading/></>:
    <View  style={{...defaultStyles.layout,
        paddingHorizontal:responsiveWidth(2.7),
        paddingBottom:responsiveHeight(2),
        alignItems:'center',
  }}>
      <Text style={{...defaultStyles.titleText,}}>Crop Result</Text>
 

         <Text style={{color:colors.color6,
            fontSize:responsiveFontSize(4.3),
            textAlign:"center",paddingTop:responsiveHeight(3),
            paddingBottom:responsiveHeight(2),
            fontWeight:"700"}}>The cultivation of <Text style={{color:colors.color1,
         
            }}>{Result}</Text> is 
          best suitable for your land based on the data .</Text>
          <View style={{borderBottomWidth:0.5,borderColor:'black',width:"80%",
          marginBottom:responsiveHeight(3)
          }}>

          </View>
          <ScrollView style={{}}>
{data.map((e,i)=>
<View key={i} style={styles.container} >
    <Text style={[styles.textStyle,{
        // backgroundColor:"red",  
         flexBasis:responsiveWidth(65),}]}>{e.label} :-</Text>
            <Text style={styles.textStyle}>{e.value}</Text></View>
)}
</ScrollView>

    </View>
}

</>


  )
}

export default CropResult

export const styles = StyleSheet.create({
    textStyle:{color:colors.color6,
            fontSize:responsiveFontSize(3),
            paddingTop:responsiveHeight(2.5),
            fontWeight:"700"},
    container:  {
            flexDirection:'row',
          justifyContent:"flex-start",
            paddingLeft:responsiveWidth(3),
            width:responsiveWidth(90)
        }

})