import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  navigation: any;
}>;
function Splash({navigation}: Props) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CreateWallet');
    }, 2000);
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      {/* <Image
        source={require('../images/Splash.jpg')}
        style={{width: '100%', height: '100%'}}
      /> */}
    </View>
  );
}
export default Splash;
