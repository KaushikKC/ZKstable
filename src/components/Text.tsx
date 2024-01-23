import React, {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = PropsWithChildren<{
  inr: string;
  dollar: string;
}>;

export function Texts({inr, dollar}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{inr}</Text>
      <Text style={styles.txt2}>(~${dollar})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#000',
    fontWeight: '400',
  },
  txt2: {
    color: '#000',
    fontWeight: '400',
  },
});
