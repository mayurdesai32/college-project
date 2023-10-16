import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { defaultStyles } from '../styles/style';
import { useNavigation } from '@react-navigation/native';
const PlantResult = { title: 'Tomato Late Bright', accuray: 88.9 };
const imgSrc = '../../assets/defimg.jpg';
const PlantModule = () => {
  const navigation = useNavigation();
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.titleText}>Classification Result</Text>
      <View style={defaultStyles.imgContainer}>
        <Image style={defaultStyles.imgStyle} source={require(imgSrc)} />
      </View>
      <>
        <View style={{ marginTop: 45 }}>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Classification:</Text>
            <Text style={styles.tagAns}>{PlantResult.title}</Text>
          </View>
          <View style={{ ...styles.tagContainer, paddingTop: 18 }}>
            <Text style={styles.tag}>Prediction Accuracy: </Text>
            <Text style={styles.tagAns}>{PlantResult.accuray}%</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            ...defaultStyles.btnProceedStyle,
            // opacity: loader ? 0.6 : 1,
          }}
          // disabled={loader ? true : false}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate('DiseaseInfo', {
              title: PlantResult.title,
              imgSrc,
            })
          }
        >
          <Text style={defaultStyles.btnProceedText}>
            VIEW SPECIES DISEASE INFORMATION
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: { fontSize: 25, fontWeight: '700', color: 'green' },
  tagAns: { paddingLeft: 10, fontSize: 21, fontWeight: '600' },

  tagContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantModule;
