import React from 'react';

import {
  BackgroundColors,
  FontSize,
  TextColors,
  TypeColors,
  Typography,
} from '_constants';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

type Props = {
  type: ButtonType;
  label: string;
  onPress: () => void;
};

const PDXButton: React.FC<Props> = ({ type, label, onPress }) => {
  const buttonStyle = {
    ...styles.button,
    ...{
      backgroundColor:
        type === ButtonType.PRIMARY
          ? TypeColors.PSYCHIC
          : BackgroundColors.DEFAULT_INPUT,
    },
  };

  const labelStyle = {
    ...styles.label,
    ...{
      color: type === ButtonType.PRIMARY ? TextColors.WHITE : TextColors.GREY,
    },
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 60,
    borderRadius: 10,
  },
  label: {
    fontSize: FontSize.FONT_SIZE_16,
    fontWeight: '600',
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default PDXButton;
