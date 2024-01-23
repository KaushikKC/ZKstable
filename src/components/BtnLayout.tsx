import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = PropsWithChildren<{
  title: string;
  onPress?: () => void;
}>;

export function BtnLayout({title, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0.5,
    borderRadius: 50,
    marginTop: 16,
  },
  title: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
    marginHorizontal: 32,
  },
});
