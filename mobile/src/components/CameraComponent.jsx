import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Avatar } from 'react-native-paper';
import { colors, defaultStyles } from '../styles/style';
const CameraComponent = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  // const takePicture = async () => {
  //   if (hasPermission) {
  //     // Check for camera permissions
  //     const photo = await camera.takePictureAsync();
  //     setImgSrc({ uri: photo.uri });
  //   }
  // };

  const takePicture = async () => {
    if (hasPermission) {
      try {
        const data = await camera.takePictureAsync();
        navigation.navigate('PlantModule', { imgsrc: data.uri });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Request camera permissions

      if (status === 'granted') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return (
      <View style={defaultStyles}>
        <Text>No access to camera</Text>
      </View>
    );

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={{ flex: 1, aspectRatio: 1 }}
        ratio={'1:1'}
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: 'row',
          bottom: 30,
          width: '100%',
          justifyContent: 'space-evenly',
          position: 'absolute',
        }}
      >
        {/* <MyIcon icon='image' handler={openImagePicker} /> */}
        <MyIcon icon='camera' handler={takePicture} />
        <MyIcon
          icon='camera-flip'
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

export default CameraComponent;

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={70}
      color={colors.color2}
      style={{ backgroundColor: colors.color1 }}
    />
  </TouchableOpacity>
);
