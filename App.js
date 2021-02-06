import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (tittle) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        tittle,
      },
    ]);
  };

  return (
    <View>
      <Navbar tittle="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aquamarine',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
