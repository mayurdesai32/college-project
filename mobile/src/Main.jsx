import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
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

import RightHeader from './components/RightHeader';
import CameraComponent from './components/CameraComponent';
import CropHistory from './screens/CropHistory';
import PlantHistory from './screens/PlantHistory';

const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            // headerShown: false,
            title: 'CropiGo ',
            headerStyle: {
              backgroundColor: colors.color1,
            },
            headerTintColor: colors.color2,
            headerTitleStyle: {
              color: colors.color2,
              fontSize: 30,
              fontWeight: '600',
            },
            headerTitleAlign: 'center',
            headerRight: () => <RightHeader />,
          }}
        >
          <Stack.Group>
            <Stack.Screen name='PlantModule' component={PlantModule} />
            <Stack.Screen
              name='about'
              component={About}
              options={{
                headerRight: () => {},
              }}
            />
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
            <Stack.Screen name='CameraComponent' component={CameraComponent} />
            <Stack.Screen name='CropHistory' component={CropHistory} />
            <Stack.Screen name='PlantHistory' component={PlantHistory} />
          </Stack.Group>
        </Stack.Navigator>
        <Toast position='top' />
      </NavigationContainer>
    </>
  );
};

export default Main;
