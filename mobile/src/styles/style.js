import { StyleSheet } from 'react-native';

export const colors = {
  color1: '#32a852',
  color4: '#a2f5b8',
  color2: '#fff',
  color3: 'red',
  color5: '#FAFFED',
  color6: '#0000',
};
export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color5,
    paddingHorizontal: 15,
  },
  titleText: {
    color: colors.color1,
    fontSize: 33,
    fontWeight: '800',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  imgStyle: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // borderWidth: 1,
  },
  btnProceedStyle: {
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: colors.color1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%',
  },
  btnProceedText: {
    color: colors.color2,
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
  },
});
