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
  dollarValue: string;
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
  dollarValue
}: Props): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amountValue, setAmountValue] = useState('');

  // useEffect(() => {
  //   const fetchValue = async () => {
  //     if (client) {
  //       //  const _client = new ethers.providers.Web3Provider(provider);
  //       const signer = client?.getSigner();
  //       let usd1;
  //       const usdcContract = new ethers.Contract(
  //         '0x84B325e04a106A8A4636914C22319b9daecF2892',
  //         ERC20ABI,
  //         signer,
  //       );

  //       usd1 = await usdcContract.balanceOf(
  //         '0x84B325e04a106A8A4636914C22319b9daecF2892',
  //       );
  //       console.log(usd1);
  //       usd1 = ethers.utils.formatUnits(usd1, 6);
  //       setUsd(usd1);
  //       console.log(usd);
  //       let link;
  //       const linkContract = new ethers.Contract(
  //         '0x84B325e04a106A8A4636914C22319b9daecF2892',
  //         ERC20ABI,
  //         signer,
  //       );

  //       link = await linkContract.balanceOf(
  //         '0x84B325e04a106A8A4636914C22319b9daecF2892',
  //       );
  //       console.log(link);
  //       link = ethers.utils.formatUnits(link, 18);
  //       setLink(link);
  //       console.log(link);
  //     }
  //     let eth;
  //     eth = await client?.getSigner().getBalance();
  //     eth = ethers.utils.formatUnits(eth!, 18);
  //     seteth(Number(eth).toFixed(4));
  //     console.log('eth' + eth);
  //   };
  //   fetchValue();
  // }, [client, sign]);
  const handleModal = () => {
    setIsModalVisible(true);
  };

  // const callAction = async (action: string) => {
  //   if (client && sign) {
  //     console.log('hello');
  //     const signer = await client?.getSigner().getAddress();
  //     console.log('ended');
  //     console.log(signer);

  //     if (action === 'Supply') {
  //       await supply({
  //         user: signer,
  //         reserve: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
  //         amount: amountValue,
  //         onBehalfOf: signer,
  //         provider: client,
  //         signer: client.getSigner(),
  //       });
  //     } else if (action === 'Borrow') {
  //       await borrow({
  //         user: signer,
  //         reserve: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
  //         amount: amountValue,
  //         interestRateMode: InterestRate.Variable,
  //         onBehalfOf: signer,
  //         provider: client,
  //         signer: client.getSigner(),
  //       });
  //     } else if (action === 'Withdraw') {
  //       await Withdraw({
  //         user: signer,
  //         reserve: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
  //         amount: amountValue,
  //         aTokenAddress: '0x3FfAf50D4F4E96eB78f2407c090b72e86eCaed24',
  //         onBehalfOf: signer,
  //         provider: client,
  //         signer: client.getSigner(),
  //       });
  //     } else if (action === 'Repay') {
  //       await Repay({
  //         user: signer,
  //         reserve: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
  //         amount: amountValue,
  //         interestRateMode: InterestRate.Variable,
  //         onBehalfOf: signer,
  //         provider: client,
  //         signer: client.getSigner(),
  //       });
  //     }
  //     setIsModalVisible(false);
  //   }
  // };


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
        modalTitle={action + ' ' + chainName}>
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

            <Text style={styles.amountDollar}>${Number(amountValue)*Number(dollarValue)}</Text>
          </View>
          <View style={styles.AmountContentRight}>
            <View>
              <Image source={chainImg} />
              <Text>{chain}</Text>
            </View>
            <View>
              <Text>Wallet balance {walletBalance}</Text>
              <Text>MAX</Text>
            </View>
          </View>
        </View>
        <View>
          <Button
            title={`Approve ${chainName} to continue`}
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
    alignItems: 'center',
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
    marginVertical: 10, 
  },
});
