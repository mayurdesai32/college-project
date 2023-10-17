import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { List } from 'react-native-paper';

const data = [
  {
    title: 'APPLE',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'CHERRY',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'CORN',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'GRAPE',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'PEACH',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'PEPPER BELL',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'POTATO',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'STRAWBERRY',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'STRAWBERRYrrr',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
  {
    title: 'STRAWBERhghfghfghRY',
    list: [
      'Apple Scab',
      'Apple Black Rot',
      'Apple Cedar',
      'Apple Rust',
      'Apple Healthy',
    ],
  },
];

const SupportedDisease = ({ navigation }) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={{ ...defaultStyles.titleText }}>
        ALL Supported Species-Diseases
      </Text>
      <>
        {/* <List.AccordionGroup> */}
        <View style={{ paddingBottom: 20, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map((ele) => (
              <List.Accordion
                key={ele.title}
                style={{
                  backgroundColor: colors.color1,
                  //  marginVertical: 7
                  marginTop: 7,
                }}
                title={ele.title}
                titleStyle={{ ...styles.tag, paddingLeft: 20 }}
                id={ele.title}
                // onPress={() => {}}
                // right={(props) => (
                //   <List.Icon {...props} color='red' icon='folder' />
                // )}
              >
                {ele.list.map((e, index) => (
                  <List.Item
                    key={index}
                    // id={index}
                    title={`- ${e}`}
                    titleStyle={{ fontSize: 22, fontWeight: '600' }}
                    style={{
                      backgroundColor: colors.color4,
                      // marginHorizontal: 10,
                      borderBottomWidth: 1,
                    }}
                    // left={(props) => <List.Icon {...props} icon='folder' />}
                    onPress={() => {
                      navigation.navigate('DiseaseInfo', { title: e });
                    }}
                  />
                ))}
              </List.Accordion>
            ))}
          </ScrollView>
        </View>
        {/* </List.AccordionGroup> */}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    color: colors.color2,
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: 3,
    textAlign: 'center',
  },
});

export default SupportedDisease;
