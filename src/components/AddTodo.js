import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert(`Todo is empty!
Please write down the to-do list!`);
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Todo..."
        autoCorrect
      />
      <Entypo.Button
        name="add-to-list"
        onPress={pressHandler}
        size={24}
        color="white"></Entypo.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginBottom: 15,
  },
  input: {
    borderRadius: 5,
    width: '80%',
    paddingLeft: 5,
    paddingRight: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'mediumpurple',
  },
});
