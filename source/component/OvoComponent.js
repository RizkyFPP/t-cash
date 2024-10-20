import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 0,
    textAlign: 'center',
  },
});

const OvoComponent = () => {
  return (
    <View style={styles.wrapperPay}>
      <View style={styles.iconContainer}>
        <View style={styles.iconStyle}>
          <Icon name="wallet" size={35} color="grey" />
        </View>
        <Text style={styles.textStyle}>Top Up</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconStyle}>
          <Icon name="landmark" size={35} color="grey" />
        </View>
        <Text style={styles.textStyle}>Transfer</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconStyle}>
          <Icon name="file-alt" size={35} color="grey" />
        </View>
        <Text style={styles.textStyle}>History</Text>
      </View>
    </View>
  );
};

export default OvoComponent;
