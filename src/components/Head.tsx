import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  title: String;
  subTitle?: String;
}>;

export function Head({title, subTitle}: Props): JSX.Element {
    const [isConnected,setIsConnected] = useState(false)

    const onConnect = () => {

    }

  return (
    <View style={styles.Top}>
      <View style={styles.contenttop}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Pressable onPress={onConnect}>
        <Text style={styles.text}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenttop: {
    flexDirection: 'row',
  },
  title: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 18,
  },
  subTitle: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 18,
  },
  text: {
    textDecorationLine: 'underline',
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
  },
});
