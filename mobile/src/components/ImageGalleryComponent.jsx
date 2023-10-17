import * as ImagePicker from 'expo-image-picker';
const ImageGalleryComponent = async () => {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    return alert('Permission to access gallery is required');
  }

  const data = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  return data.assets[0].uri;
};

export default ImageGalleryComponent;
