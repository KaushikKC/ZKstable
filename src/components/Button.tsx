import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = PropsWithChildren<{
  title: string;
  onPress?: () => void;
}>;

export function Button({title, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#242426',
    borderRadius: 50,
    marginTop: 16,
  },
  title: {
    color: '#FFF',
    fontFamily: 'Quicksand',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
  },
});
