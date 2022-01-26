import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

type Props = {
  onPress: () => void;
};

const Icon: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={'rgba(0, 0, 0, 0.1)'}>
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 45,
    color: 'rgba(0, 0, 0, 0)',
    padding: 8,
  },
});

export default Icon;
