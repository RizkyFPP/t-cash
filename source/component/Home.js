import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import OvoComponent from './OvoComponent';
import FiturUtama from './FiturUtama';
import PromoItems from './PromoItems';
import NavigationWrapper from './NavigationWrapper';

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
  greetingText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
    color: '#383838',
  },
  wrapperOvo: {
    marginHorizontal: 18,
    height: 150,
    marginTop: -60,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 10,
  },
  textOvo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
  },
  garisDiOvo: {
    height: 0.8,
    backgroundColor: '#adadad',
    marginTop: 10,
    marginHorizontal: 10,
  },
  divider: {
    width: width,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
  contentContainer: {
    marginTop: 160,
    paddingBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  wrapperFiturUtama: {
    marginHorizontal: 18,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    height: 95,
    shadowColor: 'rgba(255, 255, 255, 0.6)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
});

const Home = () => {
  const navigation = useNavigation();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Selamat Pagi';
    } else if (currentHour < 15) {
      return 'Selamat Siang';
    } else if (currentHour < 18) {
      return 'Selamat Sore';
    } else {
      return (
        <Text style={{fontWeight: 'bold', color: '#adb5bd'}}>
          Selamat Malam
        </Text>
      );
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />

      <View style={styles.background} />

      <ScrollView style={{flex: 1}}>
        <Text style={styles.greetingText}>{getGreeting()}</Text>

        <View style={styles.contentContainer}>
          <View style={styles.wrapperOvo}>
            <View style={styles.textOvo}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
                T-Cash
              </Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#383838'}}>
                Rp 1.000.000
              </Text>
            </View>
            <View style={styles.garisDiOvo}></View>
            <OvoComponent />
          </View>

          <View style={styles.wrapperFiturUtama}>
            <FiturUtama />
          </View>

          <View style={styles.divider}></View>

          <PromoItems />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: '#fca311',
          padding: 10,
          margin: 20,
          borderRadius: 8,
        }}
        onPress={() => navigation.navigate('TopUp')}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
          Go to Top Up
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <NavigationWrapper iconName="qrcode" targetScreen="AnotherScreen" />
      </View>
    </View>
  );
};

export default Home;
