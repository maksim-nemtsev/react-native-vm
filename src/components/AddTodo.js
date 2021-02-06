import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

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
      <Button onPress={pressHandler} title="add" />
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
    width: '40%',
    paddingLeft: 5,
    paddingRight: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'mediumpurple',
  },
});

export default AddTodo;
