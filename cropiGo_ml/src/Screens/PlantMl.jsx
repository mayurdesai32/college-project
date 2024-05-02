import { View, Text ,Image,TouchableOpacity, StyleSheet, NativeModules} from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Empty from '../asserts/empty.jpg'
import Emptyimg from '../asserts/defimg.jpg'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {CropRecommendModule} =NativeModules;
const PlantMl = ({navigation}) => {

const predict= async(img)=>{
       console.log(img)
  let data1= await CropRecommendModule.classifyImage(img)
console.log(data1)
}

const [selectImage,setSelectImage]=useState(Emptyimg)

const imageGallery=async( type)=>{
     const options={mediaType:'photo' ,selectionLimit:1}
try {

let result;
if(type==='camera'){
 result =await launchCamera(options);
}else{
result = await launchImageLibrary(options);

}
predict(result.assets[0].uri)
 setSelectImage({uri:result.assets[0].uri})
} catch (error) {
    console.log(error)
  
}
    }



  return (
    <View style={{...defaultStyles.layout,paddingHorizontal:responsiveWidth(4) }}>
      <Text style={{...defaultStyles.titleText,
    //   marginBottom:responsiveHeight(3),
            //  marginTop: responsiveHeight(3), 
                 fontSize: responsiveFontSize(4),
                 fontWeight:'800'}}>Select Image To Classify</Text>
  <Text style={{marginTop:responsiveHeight(3), 
    fontSize:responsiveFontSize(2.8),
    fontWeight:'500',textAlign:'center'}}> Upload a Disease plant leaf image to get to know which disease plant has</Text>
  
  <Image source={selectImage} style={{width:responsiveWidth(80),
    height:responsiveHeight(30) ,
    marginVertical:responsiveHeight(4)}}/>
   <View style={{flexDirection:'row',
 marginBottom:responsiveHeight(4.5),
   width:"100%",
   alignItems:'center',
   justifyContent:'space-evenly'}}>
<TouchableOpacity style={pageStyles.btnlayout}   onPress={()=>imageGallery("camera")}>
    <Text style={{color:colors.color2,
     fontSize:responsiveFontSize(2.6)
    }}> CAMERA</Text>
</TouchableOpacity>
<Text style={{fontSize:responsiveFontSize(3.0), 
    fontWeight:'400'}}>OR</Text>
<TouchableOpacity style={pageStyles.btnlayout} onPress={()=>imageGallery("gallery")}>
    <Text style={{color:colors.color2,
    fontSize:responsiveFontSize(2.6)
    }}> GALLERY</Text>
</TouchableOpacity>
   </View>
 
<TouchableOpacity style={{...defaultStyles.btn,
     width: responsiveWidth(91),

   paddingVertical: responsiveHeight(2),
     }}  onPress={()=>navigation.navigate('plantResult')}>
    <Text style={{color:colors.color2,
    textAlign:"center",
    fontWeight:'500',
    fontSize:responsiveFontSize(2.9)
    }}> PROCESS TO CLASSIFICATION</Text>
</TouchableOpacity>

    </View>
  )
}


const pageStyles = StyleSheet.create({
 btnlayout:{backgroundColor:colors.color1,
    paddingHorizontal:responsiveWidth(5.8),
    paddingVertical:responsiveHeight(2),
    borderRadius:responsiveHeight(1),
    borderWidth:0
}
});
export default PlantMl