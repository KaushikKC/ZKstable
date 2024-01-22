import React, {PropsWithChildren, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = PropsWithChildren<{
  onPressSupplies: () => void;
  onPressBorrows: () => void;
}>;

export function ActiveButton({onPressSupplies, onPressBorrows}: Props) {
  const [activeTab, setActiveTab] = useState('Supplies');

  const getButtonStyle = (tab: string) => [
    styles.button,
    activeTab === tab && styles.activeButton,
  ];

  const getButtonTextStyle = (tab: string) => [
    styles.buttonText,
    activeTab === tab && styles.activeButtonText,
  ];

  return (
    <View style={styles.btnLayout}>
      <TouchableOpacity
        style={getButtonStyle('Supplies')}
        onPress={() => {
          onPressSupplies();
          setActiveTab('Supplies');
        }}>
        <Text style={getButtonTextStyle('Supplies')}>Supplies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('Borrows')}
        onPress={() => {
          onPressBorrows();
          setActiveTab('Borrows');
        }}>
        <Text style={getButtonTextStyle('Borrows')}>Borrows</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnLayout: {
    backgroundColor: '#F2EBE6',
    flexDirection: 'row',
    borderRadius: 50,
    marginTop: 20,
    width: 150,
  },
  button: {
    // marginRight: 10,
    // paddingHorizontal: 16,
  },
  activeButton: {
    borderRadius: 50,
    backgroundColor: '#242426',
  },
  buttonText: {
    color: '#000',
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: '400',
  },
  activeButtonText: {
    color: '#FFF',
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: '400',
  },
});
