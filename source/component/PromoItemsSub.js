import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const PromoItemsSub = ({image}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 250,
  },
  image: {
    width: '92%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default PromoItemsSub;
