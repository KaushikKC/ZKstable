import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { Head } from '../components/Head';
import { Button } from '../components/Button';
import { ProfitData } from '../Data';
import { BtnLayout } from '../components/BtnLayout';
import { ValutCard } from '../components/VaultCard';
import { ProfileCard } from '../components/ProfileCard';
import dayjs from 'dayjs';
import { ethers } from 'ethers';
import { ABI, CONTRACT_ADDRESS } from '../Data/ContractConfig';


function Vault() {
  const [initiated, setInitiated] = useState(false);
  const [goal, setGoal] = useState();
  const [rate, setRate] = useState();
  const [Start, setStart] = useState();
  const [End, setEnd] = useState();
  const [milestone1, setmilestone1] = useState();
  const [milestone2, setmilestone2] = useState();
  const [milestone3, setmilestone3] = useState();
  // const [client, setClient] = useState<Web3Provider>();
  // const [sign, setSign] = useState<Signer>();
  // const {provider} = useWalletConnectModal();

  // useEffect(() => {
  //   const setprovider = async () => {
  //     if (provider) {
  //       const _client = new ethers.providers.Web3Provider(provider);
  //       _client.send('eth_requestAccounts', []).then(async () => {
  //         console.log('Connected');
  //       });
  //       setClient(_client);
  //       setSign(_client.getSigner());
  //       const signer = await client?.getSigner().getChainId();
  //       console.log('objec');
  //       console.log(signer);
  //     }
  //   };
  //   setprovider();
  // }, [provider]);

  // const FundInitiative = async () => {
  //   if (!client || !sign) {
  //     console.error('Web3Provider or Signer not available.');
  //     return;
  //   }
  
  //   const ghostContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, sign);
  
  //   try {
  //     // Convert milestone values to uint16
  //     const milestone1Value = parseInt(milestone1, 10) || 0;
  //     const milestone2Value = parseInt(milestone2, 10) || 0;
  //     const milestone3Value = parseInt(milestone3, 10) || 0;
  
  //     // Convert start and end dates to timestamps
  //     const timestampStart = dayjs(Start).unix();
  //     const timestampEnd = dayjs(End).unix();
  
  //     // Call the contract function with the provided parameters
  //     const transaction = await ghostContract.CreateInitiative(
  //       goal,            // Assuming goal is already a number or BigInt
  //       rate,            // Assuming rate is already a number or BigInt
  //       timestampStart,  // Start timestamp
  //       timestampEnd,    // End timestamp
  //       [milestone1Value, milestone2Value, milestone3Value]  // Array of milestones
  //     );
  
  //     // Wait for the transaction to be mined
  //     const receipt = await transaction.wait();
      
  //     console.log('Transaction mined:', receipt);
  
  //     // Set the 'initiated' state to true after a successful transaction
  //     setInitiated(true);
  //   } catch (error) {
  //     console.error('Error funding initiative:', error.message);
  //   }
  // };
  
  const renderCardItem = ({item}) => (
    <ProfileCard
      image={item.image}
      title={item.title}
      value={item.value}
      bg="#D6F0D4"
    />
  );
  const renderSeparator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Head title="Vault" />
        {initiated ? (
          <View>
            <ValutCard
              img={require('../images/img2.png')}
              usdc="1,000"
              dollar="1,120.00"
              limit="2000"
              address="4"
              walletAddress="0x309b2397a2b9c3fa36e9643761f04876eE17C7F7"
            />
            <Button title="Invite with Lens or ENS" />
            <View style={styles.textContent}>
              <Text style={styles.title}>Vault details</Text>
              <Text style={styles.subTitle}>Create Vault</Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerStyle}
              data={ProfitData}
              keyExtractor={item => item.id}
              renderItem={renderCardItem}
              ItemSeparatorComponent={renderSeparator}
            />
            <View style={styles.configContent}>
              <Text style={styles.subTitle}>Vault Config</Text>
              <Image source={require('../images/settingsss.png')} />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <BtnLayout title="Send" />
              <BtnLayout title="Receive" />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.fundTitle}>Create Fund</Text>
            <View>
              <Text style={styles.inputTitle}>Goal</Text>
              <TextInput
                value={goal}
                onChangeText={text => setGoal(parseFloat(text))}
                style={styles.textInput}
                keyboardType='numeric'
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Success Rate</Text>
              <TextInput
                value={rate}
                onChangeText={text => setRate(parseFloat(text))}
                style={styles.textInput}
                keyboardType='numeric'
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Start Time</Text>
              <TextInput
                value={Start}
                onChangeText={text => setStart(text)}
                style={styles.textInput}
            
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>End Time</Text>
              <TextInput
                value={End}
                onChangeText={text => setEnd(text)}
                style={styles.textInput}
      
              />
            </View>
            <View style={styles.suppliesContent}>
              <Text style={styles.text}>Add milestone</Text>
              <Text style={styles.txt}>Add new</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}>Milestone 1</Text>
              <TextInput
                value={milestone1}
                onChangeText={text => setmilestone1(parseFloat(text))}
                style={styles.textInput}
                keyboardType='numeric'
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Milestone 2</Text>
              <TextInput
                value={milestone2}
                onChangeText={text => setmilestone2(parseFloat(text))}
                style={styles.textInput}
                keyboardType='numeric'
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Milestone 3</Text>
              <TextInput
                value={milestone3}
                onChangeText={text => setmilestone3(parseFloat(text))}
                style={styles.textInput}
                keyboardType='numeric'
              />
            </View>
            <Button title="Create a fund initiative" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F6E4',
  },
  content: {
    margin: 18,
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
  separator: {
    height: 16,
  },
  containerStyle: {
    marginTop: 30,
    flexGrow: 1,
    paddingBottom: 30,
  },
  configContent: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  textInput: {
    borderColor: '#111',
    borderWidth: 2,
    borderRadius: 10,
    color: '#111',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  inputTitle: {
    color: '#111',
    fontSize: 16,
    marginBottom: 5,
  },
  suppliesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: 16,
  },
  txt: {
    color: '#000',
    fontFamily: 'Quicksand',
    fontWeight: '400',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  fundTitle: {
    fontSize: 18,
    color: '#111',
    fontWeight: '800',
    marginVertical: 10,
  },
});

export default Vault;
