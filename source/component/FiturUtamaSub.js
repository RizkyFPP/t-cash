import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FiturUtamaSub = ({image, title}) => {
  return (
    <View style={{alignItems: 'center', margin: 10}}>
      {React.isValidElement(image) ? (
        image
      ) : (
        <Image source={image} style={{width: 50, height: 50}} />
      )}
      <Text>{title}</Text>
    </View>
  );
};

export default FiturUtamaSub;
