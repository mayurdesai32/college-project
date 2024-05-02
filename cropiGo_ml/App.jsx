
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import {View, Text, SafeAreaView,StatusBar, Button} from 'react-native';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import { colors } from './src/styles/styles';

import SupportedCrop from './src/Screens/SupportedCrop';
import CropHome from './src/Screens/CropHome';
import RecommendCropMl from './src/Screens/RecommendCropMl';
import PlantHome from './src/Screens/PlantHome';
import PlantMl from './src/Screens/PlantMl';
import PlantResult from './src/Screens/PlantResult';
import SingleDisease from './src/Screens/SingleDisease';
import Camera from './src/Screens/Camera';
import CropResult from './src/Screens/CropResult';
const App = () => {
 
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1, backgroundColor: colors.color5}}>
      <StatusBar 
      backgroundColor={colors.color1}
      />
       <NavigationContainer>
              <Stack.Navigator initialRouteName='splash' screenOptions={{
                title:"CropiGo",
              
                 headerTitleAlign: 'center',
            // headerRight: () => <RightHeader />,
                headerStyle:{        
                  backgroundColor:colors.color1,      
                },

                  headerTintColor:colors.color2,               
                  headerTitleStyle:{
                    textAlign:"center",
                  fontSize:responsiveFontSize(4),
                  textTransform:'capitalize',
                  } ,     
                  headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),       
              }}>
                <Stack.Screen name='splash' component={Splash}/>
    
    <Stack.Screen name='SupportedCrop'component={SupportedCrop}/>             
<Stack.Screen name='home' component={Home}/>

<Stack.Screen name='cropHome' component={CropHome}/>
<Stack.Screen name='recommendCropMl' component={RecommendCropMl}/>
<Stack.Screen name='CropResult' component={CropResult}/>





<Stack.Screen name='plantHome' component={PlantHome}/>
<Stack.Screen name='plantMl' component={PlantMl}/>
<Stack.Screen name='plantResult' component={PlantResult}/>


<Stack.Screen name='singleDisease' component={SingleDisease}/>

<Stack.Screen name='Camera' component={Camera}/>



</Stack.Navigator>

    </NavigationContainer>
    </View>
  )
}

export default App