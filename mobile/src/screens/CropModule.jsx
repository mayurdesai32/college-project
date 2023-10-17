import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyles } from '../styles/style';
import { List } from 'react-native-paper';

const { s_a, state_arr } = require('../../assets/data/data.js');

const CropModule = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState('Select State');
  const [stateId, setStateId] = useState(null);
  const [city, setCity] = useState('Select City');
  const [nitrogen, setNitrogen] = useState(null);
  const [phosphorus, setPhosphorus] = useState(null);
  const [pottasium, setPottasium] = useState(null);
  const [ph, setPh] = useState(null);
  const [rainfall, setRainfall] = useState(null);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [accordionExpanded2, setAccordionExpanded2] = useState(false);

  return (
    <View
      style={{ ...defaultStyles.container, backgroundColor: colors.color5 }}
    >
      <Text style={{ ...defaultStyles.titleText, fontSize: 22 }}>
        Submit the Form to Find out the most suitable crop to grow in your farm
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Nitrogen
          </Text>
          <TextInput
            value={nitrogen}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setNitrogen(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Phosphorus
          </Text>
          <TextInput
            value={phosphorus}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPhosphorus(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Potassium
          </Text>
          <TextInput
            value={pottasium}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPottasium(text)}
            placeholder='Enter the value (Example: 50)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            pH Value
          </Text>
          <TextInput
            value={ph}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setPh(text)}
            placeholder='Enter the value (Example: 5.5)'
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
            Rainfall (in mm)
          </Text>
          <TextInput
            value={rainfall}
            style={{
              backgroundColor: colors.color2,
              fontSize: 20,
              fontWeight: '500',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderColor: colors.color2,
              borderWidth: 1,
            }}
            onChangeText={(text) => setRainfall(text)}
            placeholder='Enter the value'
            keyboardType='numeric'
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
          Select State
        </Text>

        <List.Accordion
          title={selectedState}
          expanded={accordionExpanded}
          onPress={() => setAccordionExpanded(!accordionExpanded)}
          titleStyle={{ fontSize: 20, fontWeight: '500' }}
          style={{
            backgroundColor: colors.color2,
            paddingVertical: 10,
            borderColor: colors.color2,
            borderWidth: 1,
          }}
        >
          {state_arr.map((stateName, i) => (
            <List.Item
              title={stateName}
              key={i}
              onPress={() => {
                setSelectedState(stateName);
                setAccordionExpanded(false);
                setStateId(i + 1);
              }}
              style={{
                backgroundColor: colors.color2,
                borderBottomWidth: 1,
              }}
            />
          ))}
        </List.Accordion>

        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>
          Select City
        </Text>
        <List.Accordion
          title={city}
          expanded={stateId ? accordionExpanded2 : false}
          onPress={() => setAccordionExpanded2(!accordionExpanded2)}
          titleStyle={{ fontSize: 20, fontWeight: '500' }}
          style={{
            backgroundColor: colors.color2,
            paddingVertical: 10,
            borderColor: colors.color2,
            borderWidth: 1,
          }}
        >
          {s_a[stateId]?.split('|').map((cityName, i) => (
            <List.Item
              title={cityName}
              key={i}
              onPress={() => {
                setCity(cityName);
                setAccordionExpanded2(false);
              }}
              style={{
                backgroundColor: colors.color2,
                borderBottomWidth: 1,
              }}
            />
          ))}
        </List.Accordion>

        <TouchableOpacity
          style={{
            backgroundColor: colors.color1,
            paddingVertical: 10,
            marginTop: 10,
          }}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CropResult')}
        >
          <Text
            style={{
              color: colors.color2,
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CropModule;
