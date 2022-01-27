import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '_atoms/Icon';
import Generation from '_assets/icons/generation.svg';
import Sort from '_assets/icons/sort.svg';
import Filter from '_assets/icons/filter.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '_atoms/Text';
import { TextColors } from '_constants';
import { PDXSearchField } from '_atoms/SearchField';

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.iconsContainer}>
        <Icon onPress={() => console.log('Pressed')}>
          <Generation fill={'#000000'} />
        </Icon>
        <Icon onPress={() => console.log('Pressed')}>
          <Sort fill={'#000000'} />
        </Icon>
        <Icon onPress={() => console.log('Pressed')}>
          <Filter fill={'#000000'} />
        </Icon>
      </SafeAreaView>
      <View>
        <Text type="appTitle" style={styles.title}>
          {'Pokédex'}
        </Text>
        <Text type="description" color={TextColors.GREY}>
          {'Search for Pokémon by name or using the National Pokédex number.'}
        </Text>
        <PDXSearchField
          placeholder={'What Pokémon are you looking for?'}
          onChange={value => console.log(value)}
          style={styles.searchField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  iconsContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    marginTop: 38,
    marginBottom: 16,
  },
  searchField: {
    marginVertical: 24,
  },
});

export default HomeHeader;
