import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const ButtonBase = ({ children, onPress }: Props) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </TouchableHighlight>
  );
};

export default ButtonBase;
