import { View, Text ,Image,TouchableOpacity, StyleSheet,NativeModules} from 'react-native'
import React, { useEffect } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Empty from '../asserts/empty.jpg'
import Empty from '../asserts/defimg.jpg'
const PlantResult = ({navigation}) => {

const {CropRecommendModule} =NativeModules;

const predict= async(img)=>{
       console.log(img)
  let data1= await CropRecommendModule.classifyImage(img)
console.log(data1)
}



  useEffect(()=>{
console.log("hello world")
  },[navigation])
  return (
    <View style={{...defaultStyles.layout,
    paddingHorizontal:responsiveWidth(4)}}>

      <Text  style={{...defaultStyles.titleText,
    //   marginBottom:responsiveHeight(3),
                 fontSize: responsiveFontSize(4.5),
                 fontWeight:'800'}}>Classification Result</Text>
  
  <Image source={Empty} style={{width:responsiveWidth(80),
    height:responsiveHeight(30) ,
    borderRadius:responsiveWidth(5),
    marginVertical:responsiveHeight(4)}}/>
  
<View style={{flexDirection:'row',alignItems:'center',
width:"100%",
 marginTop:responsiveHeight(3),
}}>
    <Text style={{fontSize:responsiveFontSize(3.2),
    fontWeight:'900',
    color:colors.color1,
   
    // textAlign:'left'
    }}>Classification:  </Text>
<Text style={{fontSize:responsiveFontSize(2.5),
    fontWeight:'700',
    color:"black"
    }}>Tomato Late Bright</Text>
</View>


<View style={{flexDirection:'row',

marginTop:responsiveHeight(2),
width:"100%",

alignItems:'center',}}>
    <Text style={{fontSize:responsiveFontSize(3.2),
    fontWeight:'900',
    color:colors.color1,
    // textAlign:'left'
    }}>Prediction Accurracy:  </Text>
<Text style={{fontSize:responsiveFontSize(2.5),
    fontWeight:'700',
    color:"black"
    }}>88.9%</Text>
</View>


  <TouchableOpacity
  onPress={()=>navigation.navigate('singleDisease')}
  activeOpacity={0.7}
  style={{...defaultStyles.btn,
  marginTop:responsiveHeight(8),
    //  width: responsiveWidth(88),
    alignSelf:'center',
    width:"98%",
   paddingVertical: responsiveHeight(1),
     }}>
    <Text style={{color:colors.color2,
    textAlign:"center",
    fontWeight:'500',
    fontSize:responsiveFontSize(2.9),
    // lineHeight:responsiveFontSize(5.9),
    }}> VIEW SPECIES DISEASE INFORMATION </Text>
</TouchableOpacity>
   </View>
  )
}

export default PlantResult