import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonType, PDXButton } from '_atoms/Button';
import { PDXSearchField } from '_atoms/SearchField';
import { BackgroundColors } from '_constants';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <PDXSearchField
        onChange={value => console.log(value)}
        placeholder="Search"
        initial="Test"
      />
      <PDXButton
        label="PRESS ME"
        type={ButtonType.PRIMARY}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColors.WHITE,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default SignInScreen;
