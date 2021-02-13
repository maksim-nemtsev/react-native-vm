import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EditModal from '../components/EditModal';
import AppCard from '../components/ui/AppCard';

import { THEME } from '../theme';

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const savaHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        onSave={onSave}
        value={todo.title}
        visible={modal}
        onCancel={() => {
          setModal(false);
        }}
        onSave={savaHandler}
      />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" onPress={() => setModal()} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Delete" color={THEME.DELETE_COLOR} onPress={() => onRemove(todo.id)} />
        </View>
        <View style={styles.button}>
          <Button title="Back" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: '45%',
  },
  title: {
    fontSize: 18,
  },
});

export default TodoScreen;
