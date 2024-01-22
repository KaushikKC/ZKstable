import React, {PropsWithChildren, useState, useEffect} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import { CardLayout } from './CardLayout';
import { Button } from './Button';
import ModalLayout from './ModalLayout';


type Props = PropsWithChildren<{
  image: ImageProps;
  chainName: string;
  value: string;
  percentage: string;
  action: string;
  chainImg?: ImageProps;
  chain?: string;
  walletBalance?: string;
}>;

export function Card({
  image,
  chainName,
  value,
  percentage,
  action,
  chainImg,
  chain,
  walletBalance,
}: Props): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amountValue, setAmountValue] = useState('');

  return (
    <CardLayout style={styles.Card}>
      <TouchableOpacity style={styles.cardContent}>
        <Image source={image} style={styles.img} />
        <View style={styles.textContent}>
          <Text style={styles.chainName}>{chainName}</Text>
          <Text style={styles.value}>
            {action === 'Withdraw'
              ? 0.00
              : action === 'Repay'
              ? 45.5
              : action === 'Supply' && chainName === 'USDC'
              ?  `$1000`
              : action === 'Supply' && chainName === 'LINK'
              ? `$520`
              : action === 'Supply' && chainName === 'DAI'
              ? `$820`
              : action === 'Supply' && chainName === 'ETH'
              ? `$0.45`
              : value}
          </Text>
          <Text style={styles.percentage}>
            {action === 'Withdraw'
              ? 2.3
               
              : action === 'Repay'
              ? 5.4               
              : action === 'Supply' && chainName === 'USDC'
              ? 8.4
              : action === 'Supply' && chainName === 'LINK'
              ? 0
              : action === 'Supply' && chainName === 'ETH'
              ? 9.5
              : percentage}
            %
          </Text>
        </View>
        <TouchableOpacity style={styles.actionBtn} onPress={handleModal}>
          <Text style={styles.actionText}>{action}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <ModalLayout
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
        modalTitle="Supply DAI">
        <Text style={styles.amount}>Amount</Text>
        <View style={styles.AmountContent}>
          <View>
            <TextInput
              style={styles.amountValue}
              placeholder="Enter amount"
              keyboardType="numeric"
              value={amountValue}
              onChangeText={text => setAmountValue(text)}
            />

            <Text style={styles.amountDollar}>$</Text>
          </View>
          <View style={styles.AmountContentRight}>
            <View>
              <Image source={chainImg} />
              <Text>{chain}</Text>
            </View>
            <View>
              <Text>Wallet balance {walletBalance}K</Text>
              <Text>MAX</Text>
            </View>
          </View>
        </View>
        <View>
          <Button
            title={`Approve ${chainName} to continue`}
            onPress={() => {
              console.log('hello');
              supplyWithPermit();
            }}
          />
          <Button
            onPress={() => callAction(action)}
            title={action + ' ' + chainName}
          />
        </View>
      </ModalLayout>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  AmountContent: {
    borderWidth: 0.5,
    borderColor: '#242426',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountValue: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
  },
  amountDollar: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
  },
  AmountContentRight: {
    flexDirection: 'row',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  actionBtn: {
    backgroundColor: '#242426',
    borderRadius: 50,
  },
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
  },
  percentage: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 14,
  },
  actionText: {
    color: '#FFF',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Card: {
    backgroundColor: '#F2EBE6',
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
  amount: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 16,
  },
});
