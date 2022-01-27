import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackgroundColors, PokemonTypes } from '_constants';
import HomeHeader from '_molecules/HomeHeader';
import PokemonCard from '_molecules/PokemonCard';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <PokemonCard
        id="#001"
        name="Bulbasaur"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        types={[PokemonTypes.GRASS, PokemonTypes.POISON]}
      />
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
