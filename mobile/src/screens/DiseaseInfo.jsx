import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { colors, defaultStyles } from '../styles/style';
import { List } from 'react-native-paper';
const DiseaseInfo = ({ navigation, route }) => {
  // let title = route.params.title;
  // console.log(title);
  useEffect(() => {
    if (!route.params) {
      return navigation.navigate('PlantHome');
    }
  }, []);
  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={{ ...defaultStyles.titleText }}>{route.params?.title}</Text>

      <View style={defaultStyles.imgContainer}>
        <Image
          style={defaultStyles.imgStyle}
          source={require('../../assets/defimg.jpg')}
        />
      </View>

      <>
        <List.AccordionGroup>
          {/* <List.Accordion title='DEFINATION' id='1'>
            <List.Item title='Item 1' />
          </List.Accordion>
          <List.Accordion title='SYMPTONS' id='2'>
            <List.Item title='Item 2' />
          </List.Accordion> */}
          <View>
            {/* <Text>
              List.Accordion can be wrapped because implementation uses
              React.Context.
            </Text> */}

            <List.Accordion
              title='DEFINATION'
              titleStyle={styles.tag}
              style={{ backgroundColor: colors.color5 }}
              id='1'
            >
              <List.Item title='Item 1' description='Item description' />
            </List.Accordion>
            <List.Accordion
              title='SYMPTONS'
              id='2'
              titleStyle={styles.tag}
              style={{ backgroundColor: colors.color5 }}
            >
              <List.Item title='The disease initially appears as dark, water-soaked lesions on leaves. These lesions can quickly grow and spread, eventually causing the entire plant to wither and die' />
            </List.Accordion>

            <List.Accordion
              title='TREATMENT'
              id='3'
              style={{ backgroundColor: colors.color5 }}
              titleStyle={styles.tag}
            >
              <List.Item title='Item 3' />
            </List.Accordion>
            <List.Accordion
              style={{ backgroundColor: colors.color5 }}
              title='PREVENTIONS'
              id='4'
              titleStyle={styles.tag}
            >
              <List.Item title='Item 3' />
            </List.Accordion>
          </View>
        </List.AccordionGroup>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: { color: 'green', fontSize: 25, fontWeight: '700', paddingBottom: 10 },
});

export default DiseaseInfo;
