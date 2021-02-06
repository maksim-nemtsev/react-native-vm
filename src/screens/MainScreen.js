import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';

const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <Text>Main Screen</Text>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b0c6eb',
  },
});

export default MainScreen;
