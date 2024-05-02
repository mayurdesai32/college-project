import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
export const colors = {
  color1: '#32a852', //green
  color4: '#a2f5b8', //light green
  color2: '#fff', //white
  color3: 'red',
  color5: '#FAFFED', //yellow
  color6: 'black', //black
};
export const defaultStyles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: responsiveWidth(80),
    backgroundColor: colors.color1,
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.1),
    elevation: 3,
    borderRadius: responsiveWidth(2.5),
    marginBottom: responsiveHeight(4.1),
  },

  container: {
    flex: 1,
    backgroundColor: colors.color5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  layout: {
    flex: 1,
    backgroundColor: colors.color5,
    alignItems: 'center',
  },
  titleText: {
    color: colors.color1,
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(5.5),
    fontWeight: '700',
  },
  TextLabel: {
    fontSize: responsiveFontSize(2.7),
    marginBottom: responsiveHeight(0.5),
    color: 'black',
    fontWeight: '500',
    paddingLeft: responsiveWidth(1.2),
  },

  TextInput: {
    marginTop: responsiveHeight(0.3),
    height: responsiveHeight(6.5),
    backgroundColor: colors.color2,
    fontSize: responsiveFontSize(2.5),
    // padding: 10,
    paddingHorizontal: responsiveWidth(3),
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: 'black',
    elevation: 1,
  },
  TextInputContainer: {
    width: '98%',

    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(1.0),
  },
});
