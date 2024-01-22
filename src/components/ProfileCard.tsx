import React, {PropsWithChildren} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardLayout} from './CardLayout';

type Props = PropsWithChildren<{
  image: ImageProps;
  title: string;
  value: string;
  bg?: string;
}>;

export function ProfileCard({image, title, value, bg}: Props): JSX.Element {
  return (
    <CardLayout style={styles.Card} backgroundColor={bg}>
      <View style={styles.cardContent}>
        <Image source={image} style={styles.img} />
        <View style={styles.textContent}>
          <Text style={styles.chainName}>{title}</Text>
          <Text style={styles.value}>${value}</Text>
        </View>
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
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
    marginLeft: 20,
  },
  percentage: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
  },

  Card: {
    // backgroundColor: '#D6F0D4',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14,
  },
  textContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
