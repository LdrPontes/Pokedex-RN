import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  BackgroundColors,
  FontSize,
  FontWeight,
  PokemonTypes,
  TextColors,
  TypeColors,
  Typography,
} from '_constants';
import { TypeIcons } from '_constants/icons';

type Props = {
  type: PokemonTypes;
  style: {};
};

const Chip: React.FC<Props> = ({ type, style }) => {
  const Icon =
    TypeIcons[PokemonTypes[type] as unknown as keyof typeof TypeIcons];
  const color =
    TypeColors[PokemonTypes[type] as unknown as keyof typeof TypeColors];

  const label =
    PokemonTypes[type].substring(0, 1) +
    PokemonTypes[type].substring(1).toLowerCase();
  return (
    <View style={{ backgroundColor: color, ...styles.container, ...style }}>
      <Icon fill={BackgroundColors.WHITE} height={15} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 4,
    borderRadius: 3,
  },
  label: {
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    fontWeight: FontWeight.FONT_WEIGHT_NORMAL,
    fontSize: FontSize.FONT_SIZE_12,
    color: TextColors.WHITE,
  },
});

export default Chip;
