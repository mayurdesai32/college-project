import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { defaultStyles } from '../styles/style';

const About = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}> About</Text>
      <Text style={styles.textStyle}>
        This Project Created by me Mayur Desai
      </Text>
      <Text style={styles.textStyle}>
        This Project was Created to assist Farmer
      </Text>
      <Text style={styles.textStyle}> This Project has two module</Text>
      <Text style={styles.textStyle}>
        {' '}
        1st module:- Crop Recommendation System{' '}
      </Text>
      <Text style={styles.textStyle}>
        {' '}
        2nd module:- Plant Disease Prediction{' '}
      </Text>

      <ScrollView style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 20 }}>
          For 1st module:- Crop Recommendation System
        </Text>
        <Text style={styles.textStyle}>
          I have use kaggle dataset :- cropRecommendation system
        </Text>
        <Text style={styles.textStyle}>
          Selected best Ml model from various ml model based on confusion matrix
        </Text>
        <Text style={styles.textStyle}>
          Disadvantage of this model is climate season is not consider
        </Text>
        <Text style={styles.textStyle}>
          We can improve this model by collecting more info of climate season
          and other type of crop
        </Text>
        <Text style={styles.textStyle}>
          We can also improve this model by making dataset in such a way that
          instead of prediction one crop it will predict multiple crop
        </Text>
        <Text style={{ fontSize: 25, textAlign: 'center', marginVertical: 20 }}>
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

        <Text style={{ textAlign: 'center', fontSize: 22, marginVertical: 10 }}>
          {' '}
          Note some feature are not implemented
        </Text>

        <Text style={styles.textStyle}>
          1 Keeping record on Predicted or recommended history{' '}
        </Text>
        <Text style={styles.textStyle}>
          2 Analysis on this Predicted or recommended history{' '}
        </Text>
        <Text style={styles.textStyle}>
          3 Information retated to plant Disease (defination, symptons,
          treatment, preventions ){' '}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 10,
    // textAlign: 'justify',
  },
});
export default About;
