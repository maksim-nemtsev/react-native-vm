import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  // use arrow function for onLongPress
  // const longPressHandler = () => {
  //   onRemove(todo.id);
  // };

  return (
    <TouchableOpacity
      onPress={() => onOpen(todo.id)}
      // use bind
      // onLongPress={() => onRemove.bind(null, todo.id)}
      onLongPress={() => onRemove(todo.id)}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
  },
});

export default Todo;
