import React, {PropsWithChildren} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CardLayout} from './CardLayout';


type Props = PropsWithChildren<{
  img: any;
  usdc: string;
  dollar: string;
  limit: string;
  address: string;
  walletAddress: string;
}>;

export function ValutCard({
  img,
  usdc,
  dollar,
  limit,
  address,
  walletAddress,
}: Props) {
  return (
    <CardLayout style={styles.Card}>
      <View style={styles.content}>
        <View style={styles.Ctop}>
          <View style={styles.CTopcontent}>
            <Image style={styles.img} source={img} />
            <Text style={styles.usdcText}>{usdc} USDC</Text>
          </View>
          <Text style={styles.DollarText}>${dollar}</Text>
        </View>
        <View style={styles.Ctop}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.limittext}>Limit ${limit}</Text>
            <Text style={styles.limitsubtext}>for auto collateral</Text>
          </View>
          <Text style={styles.address}>{address} address</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.Ctop}>
          <Text style={styles.walletAddress}>
            {walletAddress} <Image source={require('../images/copy.png')} />
          </Text>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Show QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 16,
  },
  actionText: {
    color: '#FFF',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  actionBtn: {
    backgroundColor: '#242426',
    borderRadius: 50,
    height: 40,
  },
  Card: {
    backgroundColor: '#D6F0D4',
    marginVertical: 16,
  },
  img: {
    width: 30,
    height: 30,
  },
  Ctop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  CTopcontent: {
    flexDirection: 'row',
  },
  walletAddress: {
    color: '#242426',
    fontWeight: '400',
    fontSize: 12,
    width: 200,
  },
  line: {
    borderWidth: 0.5,
    color: '#000',
    marginVertical: 16,
  },
  usdcText: {
    color: '#242426',
    fontWeight: '500',
    fontSize: 16,
    margin: 4,
  },
  DollarText: {
    color: '#242426',
    fontWeight: '400',
    fontSize: 12,
    // margin: 4,
  },
  limittext: {
    color: '#242426',
    fontWeight: '400',
    fontSize: 16,
  },
  limitsubtext: {
    color: '#242426',
    fontWeight: '400',
    fontSize: 12,
    margin: 4,
  },
  address: {
    color: '#242426',
    fontWeight: '400',
    fontSize: 12,
  },
});
