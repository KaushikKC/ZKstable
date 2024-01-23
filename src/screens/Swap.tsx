import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Head } from '../components/Head';
import { CardLayout } from '../components/CardLayout';
import { Button } from '../components/Button';
import DropDown from '../components/DropDown';
import { Texts } from '../components/Text';


function Swap() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Head title="Swap" />
        <View style={styles.textContent}>
          <Text style={styles.title}>From</Text>
          <Text style={styles.subTitle}>Switch wallet</Text>
        </View>
        <View style={styles.dropDownContainer}>
          <DropDown />
          <Texts inr="1,000.00" dollar="7,854" />
        </View>
        <Image
          style={styles.img}
          source={require('../images/downArrow.png')}
        />
        <View style={styles.dropDownContainer}>
          <DropDown />
          <Texts inr="1,000.00" dollar="7,854" />
        </View>
        <View style={styles.to}>
          <Text style={styles.title}>To</Text>

          <Image
            style={styles.img2}
            source={require('../images/downArrow.png')}
          />
        </View>
        <View style={styles.dropDownContainer}>
          <DropDown />
          <Texts inr="1,000.00" dollar="7,854" />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.title}>
            Slippage Tolerance
            <Image source={require('../images/warning.png')} />
          </Text>
          <Text style={styles.text2}>
            2.0 % <Image source={require('../images/settings.png')} />
          </Text>
        </View>
        <CardLayout style={styles.Card}>
          <View style={styles.cardContent}>
            <View style={styles.Scontent}>
              <Text style={styles.sText}>Price</Text>
              <Text style={styles.sText2}>
                1 GHO = 0.00423674 ETH{' '}
                <Text style={styles.sText}>( ~ $7,820)</Text>
              </Text>
            </View>
            <View style={styles.Scontent}>
              <Text style={styles.sText}>Minimum Received</Text>
              <Text style={styles.sText2}>
                8.25 ETH <Text style={styles.sText}> ( ~ $15,350.00)</Text>
              </Text>
            </View>
            <View style={styles.Scontent}>
              <Text style={styles.sText}>Gas Price</Text>
              <Text style={styles.sText2}>
                250 GWEI <Text style={styles.sText}>( ~ $153.00)</Text>
              </Text>
            </View>
            <Text style={styles.sText}>
              *End price is an estimate. You will receive at least 8.225403 ETH
              (~ $15,350) or the transaction will be refunded.
            </Text>
          </View>
        </CardLayout>
        <Button title="Swap with GHO" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Scontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Card: {
    backgroundColor: '#DEE7FE',
    marginTop: 8,
  },
  cardContent: {
    margin: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#ECF1FF',
  },
  content: {
    margin: 18,
  },
  dropDownContainer: {
    backgroundColor: '#DEE7FE',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 8,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  title: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontSize: 18,
  },
  subTitle: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  img: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    // marginTop: 16,
  },
  to: {
    flexDirection: 'row',
    marginTop: 16,
  },
  img2: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: '40%',
    // marginTop: 16,
  },
  text2: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 16,
  },
  sText: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 8,
  },
  sText2: {
    color: '#242426',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default Swap;
