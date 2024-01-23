import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState('ETH');

  const options = [
    {
      label: 'ETH',
      value: 'ETH',
      image: require('../images/img3.png'),
    },
    {
      label: 'GHO',
      value: 'GHO',
      image: require('../images/img5.png'),
    },
    {
      label: 'WETH',
      value: 'WETH',
      image: require('../images/img3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Image
          source={options.find(option => option.value === selectedValue)?.image}
          style={styles.image}
        />
        <Picker
          selectedValue={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
          style={styles.picker}
          mode="dropdown"
          dropdownIconColor="#000"
          itemStyle={styles.pickerItem}>
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 160,
    margin: 5,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF1FF',
    borderRadius: 20,
    overflow: 'hidden',
  },
  picker: {
    flex: 1,
    // height: 40,
    backgroundColor: '#ECF1FF',
    // backgroundColor: 'red',
    color: '#000',
    // width: 100,
    // borderRadius: 20,
  },
  pickerItem: {
    // flexDirection: 'row',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
});

export default DropDown;
