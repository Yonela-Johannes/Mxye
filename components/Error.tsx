import React from 'react';
import { Text, View } from 'react-native';

const Error = () => (
  <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
    <Text style={{fontWeight: "bold", marginTop: 2}}>
      Something went wrong. Please try again.
    </Text>
  </View>
);

export default Error;
