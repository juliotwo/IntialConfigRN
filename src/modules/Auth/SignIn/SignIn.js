import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontFamily: "DINPro-Bold"
  }
});
