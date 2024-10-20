import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AnotherScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is another screen!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AnotherScreen;
