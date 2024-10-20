import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,
    width: width,
    backgroundColor: '#14213d',
  },
  topUpContainer: {
    marginHorizontal: 18,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: '#383838',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#adadad',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fca311',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    paddingBottom: 60,
  },
});

const TopUp = () => {
  const [amount, setAmount] = React.useState('');

  const handleTopUp = () => {
    console.log(`Top up amount: Rp ${amount}`);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />

      <View style={styles.background} />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.topUpContainer}>
          <Text style={styles.label}>Masukkan nominal Top Up</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Rp 0"
            value={amount}
            onChangeText={setAmount}
          />
          <TouchableOpacity style={styles.button} onPress={handleTopUp}>
            <Text style={styles.buttonText}>Top Up Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopUp;
