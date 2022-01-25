import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { FontSize, FontWeight, Typography } from '_constants';

type Props = {
  type:
    | 'appTitle'
    | 'filterTitle'
    | 'description'
    | 'pokemonName'
    | 'pokemonNumber'
    | 'pokemonType';
};

const Text: React.FC<Props> = ({ type, children }) => {
  let style = styles[type];

  return <RNText style={style}>{children}</RNText>;
};

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    fontSize: FontSize.FONT_SIZE_32,
  },
  pokemonName: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    fontSize: FontSize.FONT_SIZE_26,
  },
  filterTitle: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    fontSize: FontSize.FONT_SIZE_16,
  },
  description: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontWeight: FontWeight.FONT_WEIGHT_REGULAR,
    fontSize: FontSize.FONT_SIZE_16,
  },
  pokemonNumber: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    fontSize: FontSize.FONT_SIZE_12,
  },
  pokemonType: {
    fontFamily: Typography.FONT_FAMILY_MEDIUM,
    fontWeight: FontWeight.FONT_WEIGHT_NORMAL,
    fontSize: FontSize.FONT_SIZE_12,
  },
});

export default Text;
