import { View, Text, Image, TouchableOpacity, StyleSheet, NativeModules } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Empty from '../asserts/empty.jpg'
import Empty from '../asserts/defimg.jpg'
import Loading from '../components/Loading'
import { PlantLabel } from '../asserts/label'
import Toast from 'react-native-toast-message'
import StorageContext from '../context/storage/StorageContext'
const PlantResult = ({ route: { params }, navigation }) => {

  const {
    plantList,
    loading = true,
    predictPlant,
  } = useContext(StorageContext);





  const onClickHander = () => {

    let splitData = plantList[0]?.label.split("   ")
    let title = splitData[0]
    let spie = splitData[1]
    if (spie === 'healthy') {
      // Toast("")

      // Toast.show({
      //   type: 'sucess',
      //   text1: 'healthy',
      // });


      console.log("healthy")
    } else {
      navigation.navigate('singleDisease', { title, spie })
    }

  }

  const predict = async (img) => {
    // console.log(img)
    // let data1 = await CropRecommendModule.classifyImage(img)
    // data1 = JSON.parse(data1);
    // PlantLabel[data1.maxIdx]
    // setLabel(PlantLabel[data1.maxIdx])
    // setAccurracy(((data1?.id) * 100).toFixed(2))
    // // console.log((data1?.id).toFixed(2))
    // // console.log(data1)
    // setLoading(false)
    predictPlant(img)
  }

  useEffect(() => {
    if (params?.file?.uri) {
      predict(params.file.uri)
    } else {
      navigation.navigate('plantMl')
    }
  }, [])

  return (

    loading ? <Loading /> : (<View style={{
      ...defaultStyles.layout,
      paddingHorizontal: responsiveWidth(4)
    }}>

      <Text style={{
        ...defaultStyles.titleText,
        fontSize: responsiveFontSize(4.5),
        fontWeight: '800'
      }}>Classification Result</Text>

      <Image source={params.file.uri ? ({ uri: params.file.uri }) : Empty} style={{
        width: responsiveWidth(80),
        height: responsiveHeight(30),
        borderRadius: responsiveWidth(5),
        marginVertical: responsiveHeight(4)
      }}
        resizeMode='contain'

      />

      <View style={{
        flexDirection: 'row', alignItems: 'center',
        width: "100%",
        marginTop: responsiveHeight(3),
      }}>
        <Text style={{
          fontSize: responsiveFontSize(3.2),
          fontWeight: '900',
          color: colors.color1,

          // textAlign:'left'
        }}>Classification:  </Text>
        <Text style={{
          fontSize: responsiveFontSize(2.5),
          fontWeight: '700',
          color: "black"
        }}>
          {/* {plantList[0]?.label} */}
          {plantList[0]?.label.split("   ")[1]}
        </Text>
      </View>


      <View style={{
        flexDirection: 'row',

        marginTop: responsiveHeight(2),
        width: "100%",
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: responsiveFontSize(3.2),
          fontWeight: '900',
          color: colors.color1,
        }}>Prediction Accurracy:  </Text>
        <Text style={{
          fontSize: responsiveFontSize(2.5),
          fontWeight: '700',
          color: "black"
          // "accurracy" 
        }}>{plantList[0]?.accurracy} %</Text>
      </View>


      <TouchableOpacity
        onPress={() => onClickHander()}
        activeOpacity={0.7}
        style={{
          ...defaultStyles.btn,
          marginTop: responsiveHeight(8),
          alignSelf: 'center',
          width: "98%",
          paddingVertical: responsiveHeight(1),
        }}>
        <Text style={{
          color: colors.color2,
          textAlign: "center",
          fontWeight: '500',
          fontSize: responsiveFontSize(2.9),
        }}> VIEW SPECIES DISEASE INFORMATION </Text>
      </TouchableOpacity>
    </View>)
  )
}

export default PlantResult