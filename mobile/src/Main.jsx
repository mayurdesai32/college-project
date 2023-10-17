import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlantModule from './screens/PlantModule';
import About from './screens/About';
import Result from './screens/Result';
import { colors } from './styles/style';
import PlantResult from './screens/PlantResult';
import DiseaseInfo from './screens/DiseaseInfo';
import PlantHome from './screens/PlantHome';
import SupportedDisease from './screens/SupportedDisease';
import Home from './screens/Home';
import ModuleScreen from './screens/ModuleScreen';
import CropModule from './screens/CropModule';
import CropResult from './screens/CropResult';
import CropHome from './screens/CropHome';
import SupportedCrop from './screens/SupportedCrop';
const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <Home /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.color1,
            },

            headerTintColor: colors.color2,
            headerTitleStyle: {
              color: colors.color2,
              fontSize: 25,
              fontWeight: '600',
            },
            headerTitleAlign: 'center',
          }}
          // screenOptions={{ headerShown: false }}
        >
          <Stack.Group>
            <Stack.Screen name='PlantModule' component={PlantModule} />
            <Stack.Screen name='about' component={About} />
            <Stack.Screen name='result' component={Result} />
            <Stack.Screen name='PlantResult' component={PlantResult} />
            <Stack.Screen name='DiseaseInfo' component={DiseaseInfo} />
            <Stack.Screen name='PlantHome' component={PlantHome} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen
              name='SupportedDisease'
              component={SupportedDisease}
            />
            <Stack.Screen name='ModuleScreen' component={ModuleScreen} />
            <Stack.Screen name='CropModule' component={CropModule} />
            <Stack.Screen name='CropResult' component={CropResult} />
            <Stack.Screen name='CropHome' component={CropHome} />
            <Stack.Screen name='SupportedCrop' component={SupportedCrop} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
