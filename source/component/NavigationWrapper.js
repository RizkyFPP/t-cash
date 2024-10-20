import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const NavigationWrapper = () => {
  const navigation = useNavigation();

  const menuItems = [
    {icon: 'home', label: 'Home', targetScreen: 'HomeScreen'},
    {icon: 'qrcode', label: 'Pay', targetScreen: 'ActivityScreen'},
    {icon: 'user', label: 'Account', targetScreen: 'PaymentScreen'},
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconButton}
          onPress={() => navigation.navigate(item.targetScreen)}>
          <Icon
            name={item.icon}
            size={24}
            color={item.label === 'Home' ? 'green' : '#383838'}
          />
          <Text
            style={[
              styles.label,
              {color: item.label === 'Home' ? 'green' : '#383838'},
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 4,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default NavigationWrapper;
