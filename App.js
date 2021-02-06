import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: '1', title: 'Learn React Native' },
    { id: '2', title: 'Learn TypeScript' },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const goBack = (id) => {};

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    //можно сделать референс на стейт, но тогда необходимо забайндить null а методе onPress TodoScreen
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aquamarine',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: 'darkblue',
  },
});
