import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { colors, defaultStyles } from '../styles/styles';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Abouts = () => {
  return (
    <View
      style={defaultStyles.layout}
    >
      <Text
        style={[defaultStyles.titleText, { paddingBottom: responsiveHeight(2) }]}
      > About</Text>
      <Text
        style={styles.textStyle}
      >
        This Project Created by me Mayur Desai
      </Text>
      <Text
        style={styles.textStyle}
      >
        This Project was Created to assist Farmer
      </Text>
      <Text
        style={{ ...styles.textStyle, color: colors.color1 }}
      > This Project has Two Module</Text>
      <Text style={styles.textStyle}>
        <Text style={{ fontWeight: '800' }}> 1st module :- </Text>
        <Text>Crop Recommendation</Text>
      </Text>
      <Text
        style={styles.textStyle}
      >
        <Text style={{ fontWeight: '800' }}>  2nd module :- </Text>
        Plant Disease Prediction
      </Text>

      <View style={{
        borderBottomWidth: 0.7,
        borderColor: "black",
        alignSelf: "center",
        marginTop: responsiveHeight(3),
        width: responsiveWidth(85)
      }} />


      <ScrollView style={{
        marginTop: 20, width: '100%',
      }}>
        <View style={{
          paddingHorizontal: responsiveWidth(4),
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.titleStyle}>
            For 1st module:- Crop Recommendation System
          </Text>
          <Text
            style={styles.textStyle}
          >
            I have use kaggle dataset :- Crop Recommendation system
          </Text>
          <Text
            style={styles.textStyle}
          >
            Selected best Ml model from various ml model based on confusion matrix
          </Text>
          <Text
            style={styles.textStyle}
          >
            Disadvantage of this model is climate season is not consider
          </Text>
          <Text
            style={styles.textStyle}
          >
            We can improve this model by collecting more info of climate season
            and other type of crop
          </Text>
          <Text
            style={styles.textStyle}
          >

            We can also improve this model by making dataset in such a way that
            instead of prediction one crop it will predict multiple crop
          </Text>
          <Text style={styles.titleStyle}>
            For 2nd module:- Plant Disease Prediction
          </Text>
          <Text style={styles.textStyle}>
            I have use kaggle dataset :- Plant Disease dataset
          </Text>
          <Text style={styles.textStyle}>
            In this project i have used CNN model using TransferLearning
            (efficient B3)
          </Text>
          <Text style={styles.textStyle}>
            Disadvantage of this model is age of the plant is not consider
          </Text>
          <Text style={styles.textStyle}>
            We can improve this model by collecting more info of age of the plant
            and other type of plant spieces
          </Text>

          <Text style={{
            textAlign: 'center',
            color: colors.color1,
            fontSize: 22, marginVertical: responsiveHeight(2)
          }}>
            Note :-Some Feature are not Implemented which are given below
          </Text>

          <Text style={styles.textStyle}>
            1 Analysis on this Predicted or recommended history{' '}
          </Text>
          <Text style={styles.textStyle}>
            2 Detail Information retated to plant Disease ( symptons,
            treatment, preventions ){' '}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
    textAlign: 'center', marginBottom: responsiveHeight(4),
    color: colors.color1
  },
  textStyle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '400',
    paddingBottom: responsiveWidth(2),
  },
});



export default Abouts