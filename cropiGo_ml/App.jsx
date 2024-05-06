
import React from 'react'
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import { colors } from './src/styles/styles';

import SupportedCrop from './src/Screens/SupportedCrop';
import CropHome from './src/Screens/CropHome';
import RecommendCropMl from './src/Screens/RecommendCropMl';
import PlantHome from './src/Screens/PlantHome';
import PlantMl from './src/Screens/PlantMl';
import PlantResult from './src/Screens/PlantResult';
// import SingleDisease from './src/Screens/SingleDisease';
import Camera from './src/Screens/Camera';
import CropResult from './src/Screens/CropResult';

import CropHistory from './src/Screens/CropHistory';
import CropAnalytics from './src/Screens/CropAnalytics';
import SupportPlantDisease from './src/Screens/SupportPlantDisease';
import SinglePlant from './src/Screens/SinglePlant';
import PlantDiseaseHistory from './src/Screens/PlantDiseaseHistory';
import Abouts from './src/Screens/Abouts';
import RightHeader from './src/components/RightHeader';
import NetConnection from './src/components/NetConnection';
import AnayalticScreen from './src/Screens/AnayalticScreen';
import StorageState from './src/context/storage/StorageState';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <StorageState>
      <View style={{ flex: 1, backgroundColor: colors.color5 }}>
        <StatusBar
          backgroundColor={colors.color1}
        />
        <NavigationContainer>
          <NetConnection />
          <Stack.Navigator initialRouteName='splash' screenOptions={{
            title: "CropiGo",
            headerTitleAlign: 'center',
            // headerRight: () => <RightHeader />,
            headerStyle: {
              backgroundColor: colors.color1,
            },
            headerTintColor: colors.color2,
            headerTitleStyle: {
              textAlign: "center",
              fontSize: responsiveFontSize(4),
              textTransform: 'capitalize',
            },
            headerRight: () =>

              <RightHeader />

            ,
          }}>
            <Stack.Screen name='splash' component={Splash} />
            <Stack.Screen name='Abouts' component={Abouts} />
            <Stack.Screen name='SupportedCrop' component={SupportedCrop} />
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='cropHome' component={CropHome} />
            <Stack.Screen name='recommendCropMl' component={RecommendCropMl} />
            <Stack.Screen name='CropHistory' component={CropHistory} />
            <Stack.Screen name='CropAnalytics' component={CropAnalytics} />
            <Stack.Screen name='CropResult' component={CropResult} />
            <Stack.Screen name='plantHome' component={PlantHome} />
            <Stack.Screen name='plantMl' component={PlantMl} />
            <Stack.Screen name='plantResult' component={PlantResult} />
            <Stack.Screen name='SupportPlantDisease' component={SupportPlantDisease} />
            <Stack.Screen name='singleDisease' component={SinglePlant} />
            <Stack.Screen name='PlantHistory' component={PlantDiseaseHistory} />
            <Stack.Screen name='Camera' component={Camera} />
            <Stack.Screen name='AnayalticScreen' component={AnayalticScreen} />

          </Stack.Navigator>
          <Toast position='top' />

        </NavigationContainer>
      </View>
    </StorageState>
  )
}

export default App