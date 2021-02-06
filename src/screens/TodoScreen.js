import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b0c6eb',
  },
});

export default TodoScreen;
