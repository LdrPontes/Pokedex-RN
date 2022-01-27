import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackgroundColors } from '_constants';
import HomeHeader from '_molecules/HomeHeader';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: BackgroundColors.WHITE,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default SignInScreen;
