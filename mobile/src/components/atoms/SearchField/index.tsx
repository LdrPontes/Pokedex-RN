import React, { useState } from 'react';

import { TextInput, StyleSheet, View } from 'react-native';
import {
  BackgroundColors,
  FontSize,
  FontWeight,
  TextColors,
  TypeColors,
  Typography,
} from '_constants';
import Search from '_assets/icons/search.svg';

type Props = {
  initial?: string;
  placeholder: string;
  onChange: (value: string) => void;
  style?: {};
};

export const PDXSearchField: React.FC<Props> = ({
  initial,
  placeholder,
  onChange,
  style,
}) => {
  const [isFocused, setFocus] = useState(false);

  const containerStyle = {
    ...styles.container,
    ...(isFocused ? styles.focus : styles.default),
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={{ ...style, ...containerStyle }}>
      <Search fill={TextColors.GREY} />
      <TextInput
        style={styles.textInput}
        defaultValue={initial}
        placeholder={placeholder}
        placeholderTextColor={TextColors.GREY}
        selectionColor={TypeColors.PSYCHIC}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 28,
  },
  default: {
    backgroundColor: BackgroundColors.DEFAULT_INPUT,
  },
  focus: {
    backgroundColor: BackgroundColors.PRESSED_INPUT,
  },
  textInput: {
    flex: 1,
    height: 60,
    paddingLeft: 12,
    fontSize: FontSize.FONT_SIZE_16,
    fontWeight: FontWeight.FONT_WEIGHT_NORMAL,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});
