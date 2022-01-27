import React from 'react';
import { StyleSheet, View } from 'react-native';
import Generation from '_assets/icons/generation.svg';
import Sort from '_assets/icons/sort.svg';
import Filter from '_assets/icons/filter.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextColors } from '_constants';
import PokeballHeader from '_assets/patterns/pokeball-header.svg';
import { WINDOW_WIDTH } from '_utils/dimensions';
import { Icon, SearchField, Text } from '_atoms';

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <PokeballHeader style={styles.pokeball} width={WINDOW_WIDTH} />
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
        <SearchField
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
    marginBottom: 16,
  },
  searchField: {
    marginVertical: 24,
  },
  pokeball: {
    position: 'absolute',
  },
});

export default HomeHeader;
