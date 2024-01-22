import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CardLayout} from './CardLayout';

type Props = PropsWithChildren<{
  name: string;
  address: string;
  mail: string;
}>;

export function ProfileDetail({name, address, mail}: Props): JSX.Element {
  return (
    <CardLayout style={styles.Card}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          <Text style={styles.chainName}>{name}</Text>
          <Text style={styles.value}>{address}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.actionText}>{mail}</Text>
        </TouchableOpacity>
        <View style={styles.verify}>
          <Text style={styles.verifyed}>Not Verified</Text>
          <Text style={styles.now}>Verify now</Text>
        </View>
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  chainName: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
  },

  actionText: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
    marginVertical: 10,
  },
  Card: {
    backgroundColor: '#DEE7FE',
  },
  cardContent: {
    margin: 14,
  },
  textContent: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    marginVertical: 5,
  },
  verify: {
    flexDirection: 'row',
    color: '#000',
  },
  verifyed: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
  },
  now: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '300',
    fontSize: 10,
    textDecorationLine: 'underline',
    margin: 2,
  },
});
