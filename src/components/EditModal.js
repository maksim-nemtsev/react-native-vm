import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Warning !',
        `The minimum length must be "3" characters ! Right now "${title.trim().length}" !`,
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="edit"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={onCancel} color={THEME.DELETE_COLOR} title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button onPress={saveHandler} title="Save" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '45%',
  },
  input: {
    borderRadius: 5,
    width: '80%',
    paddingLeft: 5,
    paddingRight: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'mediumpurple',
    marginBottom: 30,
    marginTop: 30,
  },
});
