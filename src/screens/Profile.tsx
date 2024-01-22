import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import { Head } from '../components/Head';
import { ProfileCard } from '../components/ProfileCard';
import { TransData } from '../Data';
import { Button } from '../components/Button';
import { ProfileDetail } from '../components/ProfileDetails';

function Profile() {
  const renderCardItem = ({item}) => (
    <ProfileCard
      image={item.image}
      title={item.title}
      value={item.value}
      bg="#DEE7FE"
    />
  );
  const renderSeparator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Head title="Profile" />
        <ProfileDetail
          name="Chaal Pritam"
          address="chaalpritam.lens"
          mail="chaalpritam@gmail.com"
        />
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <BtnLayout title="Supply" />
          <BtnLayout title="Withdraw" />
        </View> */}
        <View style={styles.textContent}>
          <Text style={styles.title}>Transactions</Text>
          <Text style={styles.subTitle}>Settings</Text>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={TransData}
            keyExtractor={item => item.id}
            renderItem={renderCardItem}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
        <Button title="Disconnect from Lens" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF1FF',
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
});

export default Profile;
