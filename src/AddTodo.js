import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const AddTodo = ({ onSubmit }) => {
  const pressHandler = () => {
    onSubmit('test todo');
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} placeholder="todo" />
      <Button onPress={pressHandler} title="add" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
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
