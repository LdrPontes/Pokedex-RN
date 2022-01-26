import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonType, PDXButton } from '_atoms/Button';
import { PDXSearchField } from '_atoms/SearchField';
import SelectableIcon, { SelectableIconType } from '_atoms/SelectableIcon';
import { PDXSlider } from '_atoms/Slider';
import Text from '_atoms/Text';
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
      <PDXSlider
        min={1}
        max={898}
        onValueChange={value => console.log(value)}
      />
      <Text type={'appTitle'}>Application Title</Text>
      <Text type={'pokemonName'}>Pokemon Name</Text>
      <Text type={'filterTitle'}>Filter Title</Text>
      <Text type={'description'}>Description</Text>
      <Text type={'pokemonNumber'}>Pokemon Number</Text>
      <Text type={'pokemonType'}>Pokemon Type</Text>
      <SelectableIcon
        type={SelectableIconType.PSYCHIC}
        onChange={value => console.log(value)}
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
