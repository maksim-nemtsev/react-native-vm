import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppTextBold from './ui/AppTextBold';

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
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
      <AntDesign.Button name="plussquare" onPress={pressHandler} size={24} color="white">
        <AppTextBold style={{ color: 'white' }}>Add</AppTextBold>
      </AntDesign.Button>
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
    width: '70%',
    paddingLeft: 5,
    paddingRight: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'mediumpurple',
  },
});

export default AddTodo;
