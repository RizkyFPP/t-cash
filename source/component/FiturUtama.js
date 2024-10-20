import React from 'react';
import {View, StyleSheet} from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FiturUtama = () => {
  return (
    <View style={styles.wrapper}>
      <FiturUtamaSub
        style={styles.fiturItem}
        image={<Icon name="mobile" size={35} color="purple" />}
        title="Isi pulsa"
      />
      <FiturUtamaSub
        style={styles.fiturItem}
        image={<Icon name="tint" size={35} color="blue" />}
        title="PDAM"
      />
      <FiturUtamaSub
        style={styles.fiturItem}
        image={<Icon name="bolt" size={35} color="yellow" />}
        title="PLN"
      />
      <FiturUtamaSub
        style={styles.fiturItem}
        image={<Icon name="tv" size={35} color="red" />}
        title={'Internet &\nTV Kabel'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  fiturItem: {
    width: '25%',
    alignItems: 'center',
  },
});

export default FiturUtama;
