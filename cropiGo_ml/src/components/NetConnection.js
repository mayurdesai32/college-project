import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {colors} from '../styles/styles';

const NetConnection = () => {
  const [isConnected, setIsConnected] = useState(false);

  const [isActive, setisActive] = useState(null);
  const [showStatus, setShowStatus] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
      setShowStatus(true);
      setisActive('yes');
    });
    return () => {
      unsubscribe(); // Corrected: unsubscribe should be called directly, not as a function.
    };
  }, []);

  useEffect(() => {
    // setShowStatus();

    if (isActive === 'yes') {
      setTimeout(() => {
        setShowStatus(false);
        setisActive('no');
      }, 5000);
    }
  }, [isActive]);

  return (
    <View>
      {showStatus ? (
        <View>
          {isConnected ? (
            <View
              style={{
                backgroundColor: colors.color5,
              }}>
              <Text
                style={{
                  color: colors.color1,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                Connected to the internet
              </Text>
            </View>
          ) : (
            <View style={{backgroundColor: colors.color6}}>
              <Text
                style={{
                  color: colors.color2,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                No internet connection
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};
export default NetConnection;
