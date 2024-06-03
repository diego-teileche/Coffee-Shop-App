import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return <View style={styles.emptyCartContainer}></View>;
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EmptyListAnimation;
