import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
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
});
