import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, defaultStyles } from '../styles/style';
import { List } from 'react-native-paper';
import { getData } from '../components/dataStorage';

const data = getData('plant');
// const data = [
//   {
//     title: '29 june 2023 time:12:21',
//   },
//   {
//     title: '29 june 2023 time:12:222',
//   },
//   {
//     title: '29 june 2023 time:12:223',
//   },
//   {
//     title: '29 june 2023 time:12:242',
//   },
//   {
//     title: '29 june 2023 time:12:225',
//   },
//   {
//     title: '29 june 2023 time:12:252',
//   },
//   {
//     title: '29 june 2023 time:12:2212',
//   },
//   {
//     title: '29 june 2023 time:12:292',
//   },
//   {
//     title: '29 june 2023 time:12:228',
//   },
//   {
//     title: '29 june 2023 time:12:282',
//   },
// ];

const PlantHistory = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData('plant'));
  }, []);
  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={{ ...defaultStyles.titleText }}>
        {'History of Crop Recommendation'}
      </Text>

      <>
        {/* <List.AccordionGroup>
       
        </List.AccordionGroup> */}

        <View style={{ paddingBottom: 20, flex: 1 }}>
          {data.length ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.map((ele) => (
                <List.Accordion
                  key={ele.title}
                  style={{
                    backgroundColor: colors.color1,
                    marginTop: 7,
                  }}
                  title={ele.title}
                  titleStyle={{ ...styles.tag, paddingLeft: 20, fontSize: 20 }}
                  id={ele.title}
                  // onPress={() => {}}
                  // right={(props) => <List.Icon icon='' />}
                >
                  <List.Item
                    title='Title:- tomato Late Bright'
                    titleNumberOfLines={1}
                    titleStyle={{
                      fontSize: 25,
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }}
                  />
                  <List.Item
                    title='confinent accuracy:  55%'
                    titleNumberOfLines={1}
                    titleStyle={{
                      fontSize: 25,
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }}
                  />
                  <List.Item
                    title='Disease info'
                    titleNumberOfLines={1}
                    style={{
                      backgroundColor: colors.color4,
                      marginHorizontal: 50,
                      marginVertical: 10,
                      borderRadius: 10,
                    }}
                    titleStyle={{
                      fontSize: 25,
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }}
                    onPress={() => navigation.navigate('DiseaseInfo')}
                  />
                </List.Accordion>
              ))}
            </ScrollView>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 200,
              }}
            >
              <Text styles={{ fontSize: 30, color: colors.color1 }}>
                No History Found
              </Text>
            </View>
          )}
        </View>
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  tag: {
    color: colors.color2,
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 10,
  },
});

export default PlantHistory;
