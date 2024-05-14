import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {colors} from '../styles/styles';
import StorageContext from '../context/storage/StorageContext';

const NetConnection = () => {
  const {connection, getConnection} = useContext(StorageContext);

  // const [isActive, setisActive] = useState(null);
  const [showStatus, setShowStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setShowStatus(true);

      getConnection(state.isConnected);
    });
    return () => {
      unsubscribe(); // Corrected: unsubscribe should be called directly, not as a function.
    };
  }, []);

  useEffect(() => {
    if (connection) {
      setTimeout(() => {
        setShowStatus(false);
      }, 2000);
    }
  }, [connection]);

  return (
    <View>
      {showStatus ? (
        <View>
          {connection ? (
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
