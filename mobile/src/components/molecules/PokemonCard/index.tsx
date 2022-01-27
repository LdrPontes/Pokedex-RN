import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BackgroundTypeColors, PokemonTypes, TextColors } from '_constants';
import { WINDOW_WIDTH } from '_utils/dimensions';
import DotsPattern from '_assets/patterns/6x3.svg';
import PokeballPattern from '_assets/patterns/pokeball.svg';
import { Text, Chip } from '_atoms';

type Props = {
  id: string;
  name: string;
  imageUrl: string;
  types: PokemonTypes[];
};

const PokemonCard: React.FC<Props> = ({ id, name, imageUrl, types }) => {
  const pokemonType = PokemonTypes[types[0]].toString();
  const cardColor =
    BackgroundTypeColors[
      pokemonType as unknown as keyof typeof BackgroundTypeColors
    ];

  return (
    <View style={styles.container}>
      <View style={{ ...styles.card, backgroundColor: cardColor }}>
        <PokeballPattern
          style={styles.pokeballPattern}
          width={145}
          height={145}
        />
        <DotsPattern style={styles.dotsPatter} width={74} height={32} />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.pokemonInfo}>
        <Text type={'pokemonNumber'} color={TextColors.NUMBER}>
          {id}
        </Text>
        <Text type={'pokemonName'} color={TextColors.WHITE}>
          {name}
        </Text>
        <View style={styles.chipContainer}>
          {types.map(e => (
            <Chip type={e} style={styles.chip} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  card: {
    overflow: 'hidden',
    width: WINDOW_WIDTH - 32,
    height: 115,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    right: 32,
    top: -28,
    width: 130,
    height: 130,
  },
  pokeballPattern: {
    position: 'absolute',
    right: -16,
    top: -16,
  },
  dotsPatter: {
    left: WINDOW_WIDTH * 0.25,
    top: 8,
  },
  pokemonInfo: {
    position: 'absolute',
    left: 32,
    top: 24,
  },
  chipContainer: {
    flexDirection: 'row',
  },
  chip: {
    marginRight: 5,
    marginTop: 5,
  },
});

export default PokemonCard;
