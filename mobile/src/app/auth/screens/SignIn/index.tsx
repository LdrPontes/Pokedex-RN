import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default SignInScreen;