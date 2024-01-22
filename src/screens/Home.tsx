import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

import {
  FormatUserSummaryResponse,
} from '@aave/math-utils';
import { ActiveButton } from '../components/ActiveButton';
import { Head } from '../components/Head';
import { BorrrowData, Data, ProfileData, SuppliesData } from '../Data';
import { Card } from '../components/Card';

function Home() {
  const [activeTab, setActiveTab] = useState('Supplies');
    useState<FormatUserSummaryResponse | null>(null);
  const renderCardItem = ({item}) => (
    <Card
      image={item.image}
      chainName={item.chainName}
      value={item.value}
      percentage={item.percentage}
      action={item.action}
      amountValue="2,000"
      amountDollar="$ 2.00K"
    />
  );
  const renderSeparator = () => <View style={styles.separator} />;

  const handlePressSupplies = () => {
    setActiveTab('Supplies');
  };

  const handlePressBorrows = () => {
    setActiveTab('Borrows');
  };
  console.log(activeTab);
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Head title="Hey,  " subTitle="Kaushik" />
        {activeTab === 'Supplies' ? (
          <View>
            <Text style={styles.sText}>Your Supplies</Text>
            <View style={styles.content}>
              <View>
                <Text style={styles.text}>Balance</Text>
                <Text style={styles.text}>APY</Text>
                <Text style={styles.text}>Collateral</Text>
              </View>
              <View style={styles.ccontent}>
                <Text style={styles.text}>
                  $1200
                 
                </Text>
                <Text style={styles.text}>
                  72.23
                  
                </Text>
                <Text style={styles.text}>
                  $1020
                 
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.sText}>Your Borrows</Text>
            <View style={styles.content}>
              <View>
                <Text style={styles.text}>Balance</Text>
                <Text style={styles.text}>APY</Text>
                <Text style={styles.text}>Liquidity</Text>
              </View>
              <View style={styles.ccontent}>
                <Text style={styles.text}>
                  $54
                  
                </Text>
                <Text style={styles.text}>2.68%</Text>
                <Text style={styles.text}>
                  $87
                  
                </Text>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'Supplies' ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
            ItemSeparatorComponent={renderSeparator}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={ProfileData}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
        <ActiveButton
          onPressSupplies={handlePressSupplies}
          onPressBorrows={handlePressBorrows}
        />

        {activeTab === 'Supplies' ? (
          <>
            <View style={styles.suppliesContent}>
              <Text style={styles.text}>Assets to Supply</Text>
              <Text style={styles.txt}>Chaal wallet</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerStyle}
              data={SuppliesData}
              keyExtractor={item => item.id}
              renderItem={renderCardItem}
              ItemSeparatorComponent={renderSeparator}
            />
          </>
        ) : (
          <>
            <View style={styles.suppliesContent}>
              <Text style={styles.text}>Assets to Borrow</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerStyle}
              data={BorrrowData}
              keyExtractor={item => item.id}
              renderItem={renderCardItem}
              ItemSeparatorComponent={renderSeparator}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 18,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    marginTop: 30,
  },
  ccontent: {
    marginLeft: 30,
  },
  text: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 16,
  },
  txt: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  sText: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 30,
  },
  separator: {
    height: 16,
  },
  containerStyle: {
    marginTop: 30,
    flexGrow: 1,
    paddingBottom: 30,
  },
  containerStyles: {
    marginTop: 30,
    // flexGrow: 1,
  },
  suppliesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Home;
