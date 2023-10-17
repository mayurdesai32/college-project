import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { colors, defaultStyles } from '../styles/style';
import { List } from 'react-native-paper';

const data = [
  {
    title: 'APPLE',
  },
  {
    title: 'CHERRY',
  },
  {
    title: 'CORN',
  },
  {
    title: 'GRAPE',
  },
  {
    title: 'PEACH',
  },
  {
    title: 'PEPPER BELL',
  },
  {
    title: 'POTATO',
  },
  {
    title: 'STRAWBERRY',
  },
  {
    title: 'STRAWBERRYrrr',
  },
  {
    title: 'STRAWBERhghfghfghRY',
  },
];

const SupportedCrop = ({}) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={{ ...defaultStyles.titleText }}>ALL Supported Crop</Text>
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
                right={(props) => <List.Icon icon='' />}
              ></List.Accordion>
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

export default SupportedCrop;
