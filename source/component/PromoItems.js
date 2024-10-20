import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import PromoItemsSub from './PromoItemsSub';

const {width} = Dimensions.get('window');

const PromoItems = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    require('../assets/images/banner1.png'),
    require('../assets/images/banner2.png'),
    require('../assets/images/banner3.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        scrollViewRef.current.scrollTo({x: width * nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        {images.map((image, index) => (
          <PromoItemsSub key={index} image={image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PromoItems;
