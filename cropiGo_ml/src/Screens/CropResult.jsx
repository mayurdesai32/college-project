import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { colors, defaultStyles } from '../styles/styles'
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import Loading from '../components/Loading'

import StorageContext from '../context/storage/StorageContext'
const CropResult = ({ route: { params }, navigation }) => {
  const { cropList, plantList, loading = true, predictCrop } = useContext(StorageContext);


  let Result


  if (params?.selectedCrop) {
    Result = cropList[params?.selectedCropValue]
  } else {
    Result = cropList[0]
  }

  useEffect(() => {
    if (params?.selectedCrop) {
      console.log(params)
    } else if (
      !params?.Nitrogen ||
      !params?.Rainfall ||
      !params?.phValue ||
      !params?.Phosphorus ||
      !params?.Potassium ||
      !params?.city
    ) {
      console.log("resend")
      navigation.navigate('recommendCropMl')
    }
    else {
      predictCrop(params)
    }
  }, [params])

  let data = [
    { label: 'Nitrogen', value: Result?.Nitrogen },
    { label: 'Phosphorous', value: Result?.Phosphorus },
    { label: 'Potassium', value: Result?.phValue },
    { label: 'pH Value', value: Result?.phValue },
    { label: 'Rainfall (in mm)', value: `${Result?.Rainfall} mm` },
    { label: 'Humidty (in %)', value: `${Result?.Humidty} %` },
    { label: 'Temperature (in *c)', value: `${Result?.Temperature} c` },
  ]
  return (
    <>
      {loading ? <><Loading /></> :
        <View style={{
          ...defaultStyles.layout,
          paddingHorizontal: responsiveWidth(2.7),
          paddingBottom: responsiveHeight(2),
          alignItems: 'center',
        }}>
          <Text style={{ ...defaultStyles.titleText, }}>Crop Result</Text>
          <Text style={{
            color: colors.color6,
            fontSize: responsiveFontSize(4.3),
            textAlign: "center", paddingTop: responsiveHeight(3),
            paddingBottom: responsiveHeight(2),
            fontWeight: "700"
          }}>The cultivation of <Text style={{
            color: colors.color1,

          }}>{Result?.crop}</Text> is
            best suitable for your land based on the data .</Text>
          <View style={{
            borderBottomWidth: 0.5, borderColor: 'black', width: "80%",
            marginBottom: responsiveHeight(3)
          }}>

          </View>
          <ScrollView style={{}}>
            {data.map((e, i) =>
              <View key={i} style={styles.container} >
                <Text style={[styles.textStyle, {
                  // backgroundColor:"red",  
                  flexBasis: responsiveWidth(65),
                }]}>{e.label} :-</Text>
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
  textStyle: {
    color: colors.color6,
    fontSize: responsiveFontSize(3),
    paddingTop: responsiveHeight(2.5),
    fontWeight: "700"
  },
  container: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingLeft: responsiveWidth(3),
    width: responsiveWidth(90)
  }

})