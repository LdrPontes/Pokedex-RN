import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonType, PDXButton } from '_atoms/Button';
import Icon from '_atoms/Icon';
import { PDXSearchField } from '_atoms/SearchField';
import SelectableIcon, { SelectableIconType } from '_atoms/SelectableIcon';
import { PDXSlider } from '_atoms/Slider';
import Text from '_atoms/Text';
import { BackgroundColors } from '_constants';
import Filter from '_assets/icons/filter.svg';

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
      <Icon onPress={() => console.log('Pressed')}>
        <Filter fill={'#000000'} />
      </Icon>
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
