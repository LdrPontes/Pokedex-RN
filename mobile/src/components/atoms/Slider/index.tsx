import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { WINDOW_WIDTH } from '_utils/dimensions';
import { BackgroundColors, TypeColors } from '_constants';
import Thumb from '_assets/icons/thumb.svg';

type Props = {
  onValueChange: (value: number | number[]) => void;
  min: number;
  max: number;
};

const PDXSlider: React.FC<Props> = ({ onValueChange, min, max }) => {
  const [currentValue, setValue] = useState<number | number[]>([min, max]);

  const thumbLabel = (index: number) => {
    return typeof currentValue === 'number'
      ? currentValue
      : currentValue[index];
  };

  return (
    <View style={styles.container}>
      <Slider
        value={currentValue}
        onValueChange={value => {
          onValueChange(value);
          setValue(value);
        }}
        minimumValue={min}
        maximumValue={max}
        maximumTrackTintColor={BackgroundColors.DEFAULT_INPUT}
        minimumTrackTintColor={TypeColors.PSYCHIC}
        step={1}
        renderThumbComponent={(index: number) => (
          <View style={styles.thumbContainer}>
            <View style={styles.thumb}>
              <Thumb fill={TypeColors.PSYCHIC} />
            </View>
            <Text style={styles.thumbLabel}>{thumbLabel(index)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
  },
  thumbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  thumb: {
    backgroundColor: BackgroundColors.WHITE,
    borderRadius: 50,
  },
  thumbLabel: {
    paddingTop: 8,
  },
});

export default PDXSlider;
