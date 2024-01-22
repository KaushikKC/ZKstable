import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = PropsWithChildren<{
  style?: ViewStyle; // Add style prop
  children?: any;
  backgroundColor?: string;
}>;

export function CardLayout({
  style,
  children,
  backgroundColor,
}: Props): JSX.Element {
  return (
    <View style={[styles.CardLayout, {backgroundColor}, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  CardLayout: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});
