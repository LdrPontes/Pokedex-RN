import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  BackgroundColors,
  HeightColors,
  TypeColors,
  WeightColors,
} from '_constants/colors';
import { HeightIcons, TypeIcons, WeightIcons } from '_constants/icons';

export enum SelectableIconType {
  BUG,
  DARK,
  DRAGON,
  ELECTRIC,
  FAIRY,
  FIGHTING,
  FIRE,
  FLYING,
  GHOST,
  GRASS,
  GROUND,
  ICE,
  NORMAL,
  POISON,
  PSYCHIC,
  ROCK,
  STEEL,
  WATER,
  HEIGHT_MEDIUM,
  HEIGHT_SHORT,
  HEIGHT_TALL,
  WEIGHT_HEAVY,
  WEIGHT_LIGHT,
  WEIGHT_NORMAL,
}

type Props = {
  type: SelectableIconType;
  onChange: (value: boolean) => void;
};

const SelectableIcon: React.FC<Props> = ({ type, onChange }) => {
  const [isSelected, setSelected] = useState(false);
  const iconType = SelectableIconType[type]
    .toString()
    .replace('HEIGHT_', '')
    .replace('WEIGHT_', '');

  const Icon =
    type <= 17
      ? TypeIcons[iconType]
      : type <= 20
      ? HeightIcons[iconType]
      : WeightIcons[iconType];

  const color =
    type <= 17
      ? TypeColors[iconType as unknown as keyof typeof TypeColors]
      : type <= 20
      ? HeightColors[iconType as unknown as keyof typeof HeightColors]
      : WeightColors[iconType as unknown as keyof typeof WeightColors];

  const onPress = () => {
    setSelected((prev: boolean) => !prev);
  };

  useEffect(() => {
    onChange(isSelected);
  }, [isSelected, onChange]);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: isSelected ? color : BackgroundColors.WHITE,
      }}
      onPress={onPress}>
      <Icon fill={isSelected ? BackgroundColors.WHITE : color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default React.memo(SelectableIcon);
