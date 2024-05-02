import { View, Text ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Camera = () => {
   const options={mediaType:'photo' ,selectionLimit:1}
   const imageGallery=async( )=>{
try {
    let result;
     result = await launchImageLibrary(options);
  result =await launchCamera(options);
} catch (error) {
    console.log(error)
    Alert('something went wrong')
}

console.log(result)
    }
  return (
    <View>
      <Text>Camera</Text>
      <TouchableOpacity onPress={imageGallery}>

           <Text>gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Camera