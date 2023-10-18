import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
const ImageGalleryComponent = async () => {
  try {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      return Toast.show({
        type: 'error',
        text1: 'Permission to access gallery is required',
      });
    }
  } catch (error) {
    console.log(error);
  }

  const data = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  return data.assets[0].uri;
};

export default ImageGalleryComponent;
