import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { defaultStyles } from '../styles/styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import homeimage from '../asserts/home.png'
import Empty from '../asserts/defimg.jpg'
import AccordingComponent from '../components/AccordingComponent'
import PlantDiseaseDetail from '../asserts/PlantDiseaseDetail'
import { PlantDiseaseLabel, plant } from '../asserts/label'
const SinglePlant = ({ route: { params }, navigation }) => {
  let plantType = PlantDiseaseLabel.indexOf(params.title)
  let spies = 0

  // console.log(params)
  PlantDiseaseDetail[plantType].spies.map((e, i) => {
    if (e.title === params.spie) {
      spies = i
    }
  })

  const data = PlantDiseaseDetail[plantType].spies[spies]

  useEffect(() => {
    if (!params && params.title) {
      navigation.navigate('SupportPlantDisease')
    } else {

    }
  }, [])

  return (
    <View style={defaultStyles.layout}>
      <Text style={{
        ...defaultStyles.titleText,
        marginBottom: responsiveHeight(3),
        marginTop: responsiveHeight(3),
        fontSize: responsiveFontSize(4.1),
        fontWeight: '800'
      }}> {data['title']}</Text>


      <Image source={data.image ? { uri: data.image } : Empty}
        style={{
          width: responsiveWidth(65), height: responsiveHeight(30),
          backgroundColor: 'white'
        }} />
      <View style={{
        borderBottomWidth: 0.7,
        borderColor: "black",
        alignSelf: "center",
        width: responsiveWidth(85),
        // marginVertical:responsiveHeight(7)
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(7)

      }} />
      <ScrollView style={{ width: '90%' }}>

        <AccordingComponent title={"Description"} MainTitle={true} data={[
          data.desc
        ]} />
        <AccordingComponent title={"Symptoms"} data={
          data.Symptoms
        } />
        <AccordingComponent title={"Prevention"} data={data['Prevention']} />

        <AccordingComponent title={"Remedies"} data={data['Remedies']} />

      </ScrollView>

    </View>
  )
}

export default SinglePlant