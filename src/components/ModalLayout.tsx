import React, {ReactNode} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import type {PropsWithChildren} from 'react';

type ModalLayoutProps = PropsWithChildren<{
  modalVisible?: any;
  setModalVisible?: any;
  children: ReactNode;
  modalTitle: String;
  halfMargin?: Boolean;
}>;

function ModalLayout({
  children,
  modalVisible,
  setModalVisible,
  modalTitle,
}: ModalLayoutProps): JSX.Element {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.title}>{modalTitle}</Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
          </View>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  main: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  close: {
    fontSize: 20,
    color: '#000',
  },
});

export default ModalLayout;
