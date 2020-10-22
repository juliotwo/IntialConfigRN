import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'julio-generic-components';
export default function SignIn() {
  console.log('holi');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
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
    fontFamily: 'DINPro-Bold',
  },
});
